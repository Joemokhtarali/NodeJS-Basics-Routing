const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url
    
    // console.log(url);
})

server.listen(3000)


// 2 routes / and /users 
// / Hello welcome to my page && form username on / page
// /users ul users 
// /create-user 