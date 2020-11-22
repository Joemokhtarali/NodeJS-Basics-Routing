const path = require('path')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: false }))

router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

router.post('/user', (req, res, next) => {
    return res.redirect('/')
})

module.exports = router