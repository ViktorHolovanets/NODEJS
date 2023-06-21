
require('dotenv').config();
const router=require('./routes')
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json()); // обробляє JSON запити
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)
const serverName = process.env.NAME || 'Nodejs JWT Auth';
const PORT = process.env.PORT || 3000;


// Запустил сервер
app.listen(PORT, () => console.log("Server " + serverName + " running at port " + PORT));