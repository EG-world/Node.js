import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
    console.log('users에 존재하는 미들웨어')
    next()
})

// http://Localhost:3000/users (GET)
// DB를 호출하는 용도로 주로 쓰임
// 회원정보 보기
router.get('/', (req, res) => {
    res.status(200).send('GET: /users 회원정보보기')
})

// http://Localhost:3000/users (POST)
// 회원가입
router.post('/', (req, res) => {
    res.status(200).send('POST: /users 회원가입')
})

// http://Localhost:3000/users (PUT)
// 정보수정
router.put('/:id', (req, res) => {  // :id (id를 받을 수 있도록)
    res.status(201).send('PUT: /users/:id 정보수정')
})

// http://Localhost:3000/users (DELETE)
// 회원탈퇴
router.delete('/:id', (req, res) => {  // :id (id를 받을 수 있도록)
    res.status(201).send('DELETE: /users/:id 회원탈퇴')
})

// 외부에서 라우터객체로 가져다 쓸 수 있도록 함
export default router