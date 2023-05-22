
var express = require('express');
var app = express();

// app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const config = {

        db: {
            database: 'tryConnectToNodeJS',
            server: 'DESKTOP-NJDS2P0',
            user: 'saraBiton',
            password: '1234',
            options: {
                trustServerCertificate: true
    
            }
        }
    }
    module.exports = config;
