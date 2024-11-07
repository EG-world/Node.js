/*
    동기식(순차적) vs 비동기식(병렬처리 또는 빠른애들부터)
*/


/* 동기식 
function func1() {
    for (let i=0; i<10000000000; i++);
    return 100
}

function func2() {
    return func1() + 100
}

function func3() {
    return func2() + 100
}

console.log('프로그램이 시작합니다')
const result = func3()
console.log(result)
*/

/* 비동기식 
function timeout() {
    console.log('1번 실행')
    setTimeout(() => {      // 비동기 함수
        console.log('2번 실행')
    }, 3000)
    console.log('3번 실행')
}

timeout()
*/


/* 
    문제
    주어진 초가 지나면 callback함수를 호출하는 함수를 작성
    (단, 주어진 초가 0보다 작으면 에러를 발생. callback 함수가 없으면 에러를 발생)

    function run(callback, seconds) {
        ...
    }

    에러를 발생하는 문장
    throw new Error(메시지)

    callback : console.log('타이머 완료!')
*/

function run(callback, seconds) {
    if (!callback) {
        throw new Error('callback 함수가 없습니다')
    }
    if (!seconds || seconds < 0) {
        throw new Error('입력값이 0보다 커야합니다')
    }

    // setTimeout(() => {
    //     return callback()
    // }, seconds)

    setTimeout(callback, seconds)
}

// function timer() {
//     console.log('타이머 완료!')
// }

// run('' ,3000)

// run(() => {
//     console.log('타이머 완료!')
// }, 3000)

// run(() => {
//     console.log('타이머 완료!')
// }, -3000)

try {
    run(() => {
        console.log('타이머 완료!')
    }, -3000)
}catch(error) {
    console.log(error)
    console.log('에러 발생 후 정상적인 종료')
}