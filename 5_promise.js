/* 
    프로미스(Promise)
    - 비동기 작업의 완료 또는 실패를 나타내는 객체
    - 주로 서버 요청이나 타이머와 같은 비동기 작업에서 사용  
    - 콜백함수로 인한 콜백 지옥 문제를 해결

    ex) 어떤 작업이 끝나야 다음 작업을 하고 또 끝나야 다음작업을 하게끔 만들고 싶을 때 콜백지옥에 빠짐
        function firstTask(callback) {
            ....
        }

        function secondTask(callback) {
            ....
        }
        
        firstTask(() => {
            ....
            secondTask(() => {
                ....
                thirdTask(() => {
                    
                })    
            })    
        })

    상태 
    - 대기 : 프로미스가 아직 완료되지 않은 초기 상태
    - 이행 : 비동기 작업이 성공적으로 완료되어 결과 값을 반환한 상태
    - 거부(리젝) : 비동기 작업이 실패하고 오류가 발생한 상태 

    프로미스 객체 만들기
    const myPromise = new Promise((resolve, reject) => {
        let success = true
        if(success) {
            resolve('작업이 성공했습니다.')
        }else {
            reject('작업에 실패했습니다.'
        }
    })

    프로미스 사용법
    // 성공시
    myPromise.then((message) => {
        console.log(message)
    })

    // 실패시
    myPromise.catch((error) => {
        console.log(error)    
    })

    항상 실행
    myPromise.finally(() => {
        console.log('프로미스가 완료되었습니다.)    
    })
*/

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = '' // { user: 'apple', age:20 }
            if(data) {
                resolve(data)
            }else {
                reject('데이터를 가져오지 못했음')
            }
        }, 2000)
    })
}

fetchData()
    .then((result) => {
        console.log('성공: ', result)
    })
    .catch((error) => {
        console.log('실패: ', error)
    })
    .finally(() => {    // 항상 출력
        console.log('요청 완료')
    })