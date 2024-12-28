const express = require('express');

let router = express.Router();

router.get('/', async (req, res) => {
    res.send('req home');
});

module.exports = router;