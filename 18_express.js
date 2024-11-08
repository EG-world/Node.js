/* 
    라이브러리 : 도구와 같은 남들이 만든것을 가져다 쓰는것
    프레임워크 : 벗어날수없는 범위에서 만들어보겠다
    
    Express 웹 프레임워크
    - 웹서버를 생성하고 HTTP 요청에 대한 라우팅 및 처리, 미들웨어를 통한 요청 및 응답 처리 등을 간단하게 구현할 수 있음
    - 다양한 확장 기능과 모듈을 제공하여 개발 생산성을 높일 수 있음
    
        npm i express

*/
import express from 'express'

const app = express()

app.use((req, res, next) => {
    res.setHeader('node-msg', 'Hi! node.js')
    next()
})

app.get('/', (req, res, next) => {
    res.send('<h2>익스프레스 서버로 만든 첫번째 페이지</h2>')
    next()
})

app.get('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({userid:'apple', name:'김사과', age:20})
    next() 
})

app.listen(3000)