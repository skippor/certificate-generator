const express = require('express');
const cert = require('../models/cert')

let router = express.Router();

router.get('/', async (req, res) => {
    res.send('cert home');
});

router.get('/view', async (req, res) => {
    const data = await cert.View()
    res.send(data);
});

router.post('/', async (req, res) => {

})

module.exports = router;