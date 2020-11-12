let http = require('http')

let express = require('express')

let app = express()

app.use('/users', (req, res, next) => {
    return res.send('<h1>Users Page</h1>')
})


app.use('/', (req, res, next) => {
    return res.send('<h1>Hello to my Express Page</h1>')
})


app.listen(3000)
// const server = http.createServer(app)

// server.listen(3000)