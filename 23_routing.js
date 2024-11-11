import express from 'express'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'

const app = express()

app.use(express.json())

// http://Localhost:3000/users
app.use('/users', userRouter)

// http://Localhost:3000/posts
app.use('/posts', postRouter)


app.listen(3000)