const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false }))

router.get('/add-user', (req, res, next) => {
    return res.send(`<form action="/user" method="POST"><input type="text" name="title"></input><button type="submit"></button></form>`)
})

router.post('/user', (req, res, next) => {
    return res.redirect('/')
})

module.exports = router