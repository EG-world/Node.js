console.log('로딩중 ...')
console.clear()

// 개발시 콘솔 사용법
console.log('log')      // 개발할 때 디버그 용도
console.info('info')    // 개발 정보
console.warn('warn')    // 경고
console.error('error')  // 에러

// assert() : 조건을 만족하지 않으면 에러 메세지를 출력
console.assert(2 === 2, '두값이 달라요!')
console.assert(2 === 3, '두값이 달라요!')

// 객체 출력
const user = { userid:'apple', name:'김사과', age:20, compay:{name:'SK',addr:'서울 중구'} }
console.log(user)
console.table(user)
console.dir(user, {showHidden: true, depth:0})

// trace 사용
function func1() {
    func2()
}

function func2() {
    func3()
}

function func3() {
    console.log('func3() 실행')
    console.trace()
}

func1()