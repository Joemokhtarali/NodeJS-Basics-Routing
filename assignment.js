const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head> Assignment 1 </head>')
        res.write('<body>')
        res.write('<h1> Welcome to my Page</h1>')
        res.write('<h4> Sign up to our Users list</h4>')
        res.write('<form action="/users" method="POST"><input type="text" name="users"><button type="submit">Submit</button></input></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/users' && method === 'POST'){
        const users = []
        const body = []
        console.log(req.method);
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsed = Buffer.concat(body).toString()
            const user = parsed.split('=')[1]
            users.push(user)
            console.log(users)
            console.log(user)
        })

        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head> Database </head>')
        res.write('<body>')
        res.write('<ul>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
})

server.listen(3000)


// 2 routes / and /users 
// / Hello welcome to my page && form username on / page √
// /users ul users 
// /create-user 