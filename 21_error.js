import express from "express"
import fs from "fs"
import fsAsync from "fs/promises"

const app = express()

app.use(express.json())

// http://127.0.0.1:3000/file1
app.get('/file1', (req, res) => {
    fs.readFile('/file1.txt', (err, data) => {
        if(err) {
            res.sendStatus(404)
        }
    })
})

// http://127.0.0.1:3000/file2
app.get('/file2', (req, res) => {
    try{
        const data = fs.readFileSync('./file2.txt')
    }catch(error) {
        res.sendStatus(404)
    }
})

// http://127.0.0.1:3000/file3
app.get('/file3', (req, res) => {
    fsAsync.readFile('/file3.txt')
        .catch((error) => {
            res.sendStatus(404)
        })
})

//  http://127.0.0.1:3000/file4
app.get('/file4', async (req, res) => {
    try{
        const data = await fsAsync.readFile('/file4.txt')
    }catch(error) {
        res.sendStatus(404)
    }
})

app.listen(3000)