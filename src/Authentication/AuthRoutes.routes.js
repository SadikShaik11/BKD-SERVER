/**
 * @module Authentication
 * 
 */
const Router = require('express').Router
const router = new Router()


router.post('/login', (req, res) => {
    console.log(req.body)
    res.json(" welcome")
})

module.exports = router