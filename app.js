const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false }))

app.use('/users', (req, res, next) => {
    return res.send(`<form action="/user" method="POST"><input type="text" name="title"></input><button type="submit"></button></form>`)
})

app.post('/user', (req, res, next) => {
    console.log(req.body)
    return res.redirect('/')
})

app.use('/', (req, res, next) => {
    return res.send('<h1>Hello to my Express Page</h1>')
})


app.listen(3000)
// const server = http.createServer(app)

// server.listen(3000)