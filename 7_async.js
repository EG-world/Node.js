function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌')
        },1000)
    })
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎')
        },3000)
    })
}

function getOrange() {
    return Promise.reject(new Error('오렌지 없음'))
}

// getBanana()
//     .then((banana) => getApple().then((apple) => [banana, apple]))
//     .then(console.log)

async function fetchFruits() {
    const banana = await getBanana()
    const apple = await getApple()
    return [banana, apple]
}

fetchFruits().then((fruits) => console.log(fruits))