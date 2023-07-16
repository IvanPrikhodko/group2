// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the incidents model
let incidents = require('../models/incidents');

/* GET incidents List page. READ */
router.get('/', (req, res, next) => {
    // find all incidents in the incidents collection
    incidents.find().then((incidents) => {
        res.json({
            data: incidents            
        });
    }).catch((err) => console.log(err));

});

module.exports = router;