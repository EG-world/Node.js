const fs = require('fs').promises

// 파일 읽기
fs.readFile('./new_test.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch(console.log)

// 파일 출력
fs.writeFile('./write.txt', 'Hello Node.js! 파일 출력입니다')
    .catch(console.error)

// 파일 추가 출력
fs.appendFile('./write.txt', '\r\n추가로 글을 입력합니다')
    .catch(console.error)

// 복사
fs.copyFile('./new_test.txt', './test.txt')
    .catch(console.error)

// 디렉토리 생성
fs.mkdir('sub')
    .catch(console.log)

// 현재 디렉토리에 있는 파일 및 폴더 리스트를 반환
fs.readdir('./')
    .then(console.log)
    .catch(console.log)