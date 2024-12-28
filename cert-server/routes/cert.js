const express = require('express');
const cert = require('../models/cert')

let router = express.Router();

router.get('/', async (req, res) => {
    res.send('cert home');
});

router.get('/view/:id', async (req, res) => {
    const data = await cert.View(Number(req.params.id))
    res.send(data);
});

router.post('/', async (req, res) => {
    const data = await cert.Create(req.body)
    res.send(data);
})

module.exports = router;