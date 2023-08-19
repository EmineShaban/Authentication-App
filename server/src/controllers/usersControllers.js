const router = require('express').Router();


router.get('/register', (req, res) => {
    console.log(req.body);

    res.json({ok: true})
})





module.exports = router