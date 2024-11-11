import express from 'express'
// npm i body-parser
import bodyParser from 'body-parser' // 바디에 감싼 데이터를 가져오기 위한 모듈

const app = express()

// 미들웨어 등록 방법
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h2>로그인</h2><form action="/login" method="post"><p>아이디 <input type="text" name="userid"></p><p>비밀번호 <input type="password" name="userpw"></p><p><button type="submit">로그인</button> <a href="http://127.0.0.1:3000/posts?id=1&userid=apple&name=김사과">클릭</a></p></form>')
})

// http://127.0.0.1:3000/posts
// http://127.0.0.1:3000/posts?id=1
// http://127.0.0.1:3000/posts?id=1&userid=apple&name=김사과        ? 뒤에는 데이터
app.get('/posts', (req, res) => {
    console.log('posts 호출')
    console.log('path: ', req.path)
    console.log('query: ', req.query)
    res.sendStatus(200)
})


// http://127.0.0.1:3000/posts/1
// http://127.0.0.1:3000/posts/1?idx=10
app.get('/posts/:id', (req, res) => {
    console.log('posts/:id 호출')
    console.log('path: ', req.path)
    console.log('query: ', req.query)
    console.log('params: ', req.params)
    res.sendStatus(200)
})


// http://127.0.0.1:3000/member/10
app.get('/member/:userid', (req, res) => {
    console.log(req.path, '호출')
    console.log(`${req.params.userid}번 멤버가 출력됨`)
    res.sendStatus(200)
})

// 문제
/* 
    로그인 페이지를 이용하여 입력한 id와 pw를 콘솔에 출력
*/

app.get('/login', (req, res) => {
    console.log(`유저 id: ${req.query.userid} 유저 pw: ${req.query.userpw}`)
    res.status(200).send('로그인 되었습니다')
})

app.post('/login', (req,res) => {
    console.log('login 호출(post)')
    console.log(req.body)
    res.status(200).send('로그인 되었습니다')
})

app.listen(3000)