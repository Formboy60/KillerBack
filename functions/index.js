
const express = require('express')
const app = express()
const {api} = require('./api')
app.use('/api/v1', api)


const functions = require("firebase-functions"); 
 

// function ceQueJeVeux(req, res){

// }

const opts = { memory: "1GB", timeoutSeconds: 30 }; 
exports.KillerBack = functions.runWith(opts).https.onRequest(app);
