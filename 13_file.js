const fs = require('fs')

// 동기식 프로그램은 무조건 에러처리를 해야함.
// try{
//     fs.renameSync('./test.txt', './new_test.txt')       // Sync가 붙어있으면 동기식이다
// }catch(e) {
//     console.error(e)
//     // console.log('에러!')
// }

// 비동기식 프로그램은 별도의 에러처리가 필요하지 않음 (error 객체를 콜백함수로 넘기기때문)
// fs.rename('./new_test.txt', './test.txt', (error) => {
//     console.log(error)
// })

// promise 사용
// fs.promises
//     .rename('./test.txt', './new_test.txt')
//     .then(() => console.log('완료'))
//     .catch(console.log)

// 파일 읽기
fs.readFile('./new_test.txt', 'utf-8', (error, data) => {
    if(data) {
        console.log(data)
    }else {
        console.log(error)
    }
})