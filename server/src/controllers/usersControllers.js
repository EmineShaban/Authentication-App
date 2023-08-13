const router = require('express').Router();


router.post('/register', (req, res) => {
    console.log(req.body);

    res.json({ok: true})
})





module.exports = router