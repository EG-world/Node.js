const path = require('path')

console.log(__dirname)  // 현재 디렉토리
console.log(__filename) // 현재 파일

console.log(path.sep)
console.log(path.delimiter)

console.log(path.basename(__filename))          // 파일 이름만 추출
console.log(path.basename(__filename, '.js'))   // 확장자 제외 하고 파일 이름만 추출
console.log(path.dirname(__filename))    // 디렉토리만 추출
console.log(path.extname(__filename))    // 파일 확장명만 추출

const parsed = path.parse(__filename)
console.log(parsed)
console.log(parsed.dir)
console.log(parsed.base)

const str = path.format(parsed)
console.log(str)

console.log('isAbsolute: ', path.isAbsolute(__dirname))     // 절대경로란? 전부 나오는 경로
console.log('isAbsolute: ', path.isAbsolute('./12_path.js'))         // <- 상대경로