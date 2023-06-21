const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const config = {
    key: process.env.JWT_KEY,
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
}

function generateAccessToken(user) {
    const tokenPayload = {
        name: user.UserName,
        email: user.Email,
        jti: uuidv4(),
    };

    const token = jwt.sign(tokenPayload, config.key, {
        expiresIn: '1h',
        issuer: config.issuer,
        audience: config.audience,
        algorithm: 'HS256',
    });

    return token;
}

module.exports = {
    generateAccessToken,
};