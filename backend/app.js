const express = require('express'); //package express

const bodyParser = require('body-parser'); //package body-parser pour gérer la demande post

const helmet = require('helmet'); //package helmet pour les en-têtes http 

const path = require('path'); //package path

const mysql = require('mysql');

//import des routes
//const authRoutes = require('./routes/auth');

const userRoutes = require("./routes/user");

//const postRoutes = require('./routes/post');

const app = express(); //création de l'appli express

//Connection mysql
require('./MySql');

//app.use(helmet());

// Permet d'accéder à l'API depuis n'importe quelle origine
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(bodyParser.json()); //méthode JSON pour transformer la requête en objet JS utilisable

//app.use('/images', express.static(path.join(__dirname, 'images')));

//app.use('/api/auth', authRoutes);

//app.use('/api/posts', postRoutes);

//app.use("/api/auth", userRoutes);
app.use("/api/users", userRoutes);


module.exports = app; //export appli