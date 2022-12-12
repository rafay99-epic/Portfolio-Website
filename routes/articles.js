// This will be the router for the blog page:

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World');
});





module.exports = router;