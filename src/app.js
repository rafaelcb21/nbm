'use strict'

const express = require('express');
const request = require('request');

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'test' 
    });
})

const create = router.post('/', (req, res, next) => {
    res.status(200).send();

    //////
    request.post({
        url: OnlineApiUrl + 'auth/signout',
        headers: {
            'Auth': authentication_token
        }
    }, function(err, response, body) {
        //var $ = cheerio.load(body);
        var hasError = $('error').length;
        if (hasError) {
          response = {
            error: 'error'
          };
        } else {
          response = {
            http_code: 204
          };
        }
            return res.json(response);
        });

    ///////////////
        
})

app.use('/', route);

module.exports = app;