const http = require('http')

const skills = [
    {name : 'Python'},
    {name : 'MySQL'},
    {name : 'HTML'},
    {name : 'CSS'},
    {name : 'JavaScript'},
    {name : 'React'},
    {name : 'Node.js'},
    {name : 'MongoDB'}
]

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (method === 'GET') {
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(skills))
    }
})

server.listen(3000)