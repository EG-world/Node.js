import express from 'express'

// Get 방식 : url에 담아서 데이터 전달
// Post 방식 : 바디에 감싸서 데이터 전달, 데이터 insert 할 때 (로그인/ 회원가입 등등)
// Push/Patch 방식 : 업데이트(수정) 할 때
// Delete : 지울 때

const app = express()

app.use(express.json())

app.post('/posts', (req, res) => {
    console.log(req.body)
    res.status(201).send('글을 새로 등록했어요')
})

app.listen(3000)