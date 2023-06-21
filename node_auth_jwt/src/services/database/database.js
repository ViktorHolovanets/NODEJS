const sql = require('mssql');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const config = {
    server: process.env.SERVER_DB || 'localhost',
    port: parseInt(process.env.PORT_DB) || 1433,
    database: process.env.DATABASE_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

module.exports.registerUser = async function (user) {
    try {
        const hashedPassword = await bcrypt.hash(user.Password, 10);
        const query = 'INSERT INTO Users (Id, UserName, Password, Email) VALUES (@id, @userName, @password, @email)';
        await executeDbQuery(query, {
            id: uuidv4(),
            userName: user.UserName,
            password: hashedPassword,
            email: user.Email
        });
    } catch (err) {
        console.error('Failed to register user:', err);
        throw err;
    }
}

module.exports.getUserByEmailAndPassword = async function (email, password) {
    try {
        const query = 'SELECT TOP 1 * FROM Users WHERE email = @email';
        const result = await executeDbQuery(query, {email});
        if (result && result.length > 0) {
            const user = result[0];
            const isPasswordValid = await bcrypt.compare(password, user.Password);
            return isPasswordValid ? user : null;
        }
        return null;
    } catch (err) {
        console.error('Failed to get user:', err);
        throw err;
    }
}
module.exports.updatePassword = async function (email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'UPDATE Users SET Password = @password WHERE Email = @email';
        const result = await executeDbQuery(query, {password: hashedPassword,email: email,});
        console.log('Пароль користувача оновлено.');
    } catch (err) {
        console.error('Помилка при оновленні пароля користувача:', err);
        throw err;
    }
}

async function executeDbQuery(query, params) {
    try {
        await sql.connect(config);
        const request = new sql.Request();
        if (params) {
            for (const key in params) {
                request.input(key, params[key]);
            }
        }
        const result = await request.query(query);

        return result.recordset;
    } catch (err) {
        console.error('Failed to execute database query:', err);
        throw err;
    } finally {
        sql.close();
    }
}
