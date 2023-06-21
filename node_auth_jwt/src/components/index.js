const sql = require('mssql');
const {v4: uuidv4} = require('uuid');
const {Request, Response} = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {generateAccessToken} = require('../services/token-service/authorizationHelper');
const {registerUser, getUserByEmailAndPassword} = require('../services/database/database');
const {resetPassword} = require('../services/mailer/mailer');


module.exports.register = async (request, response) => {
    try {
        const user = request.body;
        if (!user || typeof user !== 'object') {
            return response.status(401).json({
                isError: true,
                message: 'Invalid user data'
            });
        }
        await registerUser(user);
        const token = generateAccessToken(user);
        response.status(200).json({
            isError: false,
            token: token
        });
    } catch (ex) {
        console.error('Failed to register user:', ex);
        response.status(401).json({
            isError: true,
            message: 'Invalid user data'
        });
    }
};

module.exports.login = async (request, response) => {
    try {
        const userRequest = request.body;
        if (!userRequest.email || !userRequest.password) {
            return response.status(400).json({isError: true, problem: "data"});
        }
        const user = await getUserByEmailAndPassword(userRequest.email, userRequest.password);
        if (!user) {
            return response.status(400).json({isError: true, problem: "db"});
        }
        const token = generateAccessToken(user);
        response.status(200).json({
            isError: false,
            token: token
        });
    } catch (ex) {
        console.error('Failed to log in user:', ex);
        response.status(400).json({isError: true, problem: "ex"});
    }
};

module.exports.resetPassword = async (request, response) => {
    const mail = request.body;
    if (mail.mail) {
        try {
            if (await resetPassword(mail.mail))
                response.status(200).json({isError: false})
            else response.status(401).json({isError: true});
        } catch (ex) {
            response.status(400).json({isError: true});
        }
    } else response.status(400).json({isError: true});
}


