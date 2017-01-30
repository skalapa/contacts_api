'use strict';

// modules =================================================
const express = require('express');
const bodyParser = require('body-parser');


// configuration ===========================================
const restService = express();
restService.use(bodyParser.json());

// config files
var db = require('./config/db');

restService.post('/hook', function (req, res) {

    console.log('hook request');

    try {
        var speech = 'empty speech';

        if (req.body) {
            var requestBody = req.body;

            if (requestBody.result) {
                speech = '';

                if (requestBody.result.fulfillment) {
                    speech += requestBody.result.fulfillment.speech;
                    speech += ' ';
                }

                if (requestBody.result.action) {
                    speech += 'action: ' + requestBody.result.action;
                }

/*                if (requestBody.result.parameters) {
                    items += requestBody.result.parameters.items;
                    number += requestBody.result.parameters.number;
                    unit += requestBody.result.parameters.unit-weight-name;
                }*/
            }

        }

        console.log('result: ', speech);

        return res.json({
            speech: speech,
            displayText: speech,
            source: 'apiai-webhook-sample'
        });
    } catch (err) {
        console.error("Can't process request", err);

        return res.status(400).json({
            status: {
                code: 400,
                errorType: err.message
            }
        });
    }
});

// set our port and start server
restService.listen((process.env.PORT || 5000), function () {
    console.log("Server listening");
});
