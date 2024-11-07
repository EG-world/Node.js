const Rucy = {
    name : '루시',
    age : 15,
    eat: () => {
        console.log('먹습니다')
    }
}
console.log(Rucy)

// Json으로 변환하기
const json = JSON.stringify(Rucy)
console.log(json)

// json을 obj로 변환
const obj = JSON.parse(json)
console.log(obj)