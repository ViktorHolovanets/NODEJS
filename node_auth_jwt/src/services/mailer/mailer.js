const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const {updatePassword} = require('../database/database');

// Функція для генерації випадкового пароля
function generateRandomPassword() {
    const length = 10;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset[randomIndex];
    }
    return newPassword;
}

async function sendNewPasswordEmail(email, newPassword) {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT)||465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Новий пароль',
        text: `Ваш новий пароль: ${newPassword}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Електронний лист з новим паролем надіслано.');
    } catch (err) {
        console.error('Помилка при відправці електронного листа:', err);
        throw err;
    }
}

module.exports.resetPassword = async function (email) {
    try {
        const newPassword = generateRandomPassword();
        await updatePassword(email, newPassword);
        await sendNewPasswordEmail(email, newPassword);
        return true;
    } catch (err) {
        return false;
    }
}


