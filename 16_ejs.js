const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const name = '김사과'
const jobs = [
    {job: '학생'},
    {job: '개발자'},
    {job: '공무원'},
    {job: '취준생'},
    {job: '전문직'}
]

const server = http.createServer((req, res) => {
    const url = req.url
    res.setHeader('Content-Type', 'text/html')
    if (url === '/') {
        ejs.renderFile('./template/index.ejs', {name:name}).then((data) => res.end(data)) // ejs파일을 html로 변환해주는 것
    }else if (url === '/news') {
        ejs.renderFile('./template/news.ejs', {jobs:jobs}).then((data) => res.end(data))
    }
})

server.listen(3000, )