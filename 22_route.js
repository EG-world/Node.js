import express from "express"

const app = express()

// 쓰임이 비슷한 API들을 묶어줌
app.route('/posts')
    .get((req, res) => {
        res.status(200).send('/posts GET 호출')
    })
    .post((req, res) => {
        res.status(201).send('/posts POST 호출')
    })
    // 수정
    .put((req, res) => {
        res.status(201).send('/posts PUT 호출')
    })
    // 삭제
    .delete((req, res) => {
        res.status(200).send('/posts DELETE 호출')
    })

app.listen(3000)