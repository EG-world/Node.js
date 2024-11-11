import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
    console.log('posts에 존재하는 미들웨어')
    next()
})

// http://Localhost:3000/posts (GET)
// 글 보기
router.get('/', (req, res) => {
    console.log('GET: /posts 글 보기')
})

// http://Localhost:3000/posts (POST)
// 글 작성하기
router.post('/', (req, res) => {
    console.log('POST: /posts 글 작성하기')
})

// http://Localhost:3000/posts (PUT)
// 글 수정하기
router.put('/:id', (req, res) => {
    console.log('PUT: /posts/:id 글 수정하기')
})

// http://Localhost:3000/posts (DELETE)
// 글 삭제하기
router.delete('/:id', (req, res) => {
    console.log('DELETE: /posts/:id 글 삭제하기')
})


// 외부에서 라우터객체로 가져다 쓸 수 있도록 함
export default router