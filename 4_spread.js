/*  
    원시값과 객체값의 비교
    원시값 : 값에 의한 복사가 일어남
    객체값 : 참조에 의한 복사(메모리 주소)
*/

function display(num) {
    num = 10
    console.log(num)
}

const value = 5
display(value)
console.log(value)

console.log('-------------------------')


function displayObj(obj) {
    obj.age = 15
    console.log(obj)
}

const Rucy = {name:'루시', age:10}
displayObj(Rucy)    // 객체의 값을 변경하는 것은 좋지 않은 알고리즘
console.log(Rucy)

console.log('-------------------------')

function changeAge(obj) {
    return { ...obj, age: 7 }
}

PPomi = changeAge(Rucy)

console.log(Rucy)
console.log(PPomi)

console.log('-------------------------')

function add(num1, num2, num3) {
    return num1 + num2 + num3
}

console.log(add(10,20,30))

const nums = [10, 20, 30]
console.log(add(nums[0], nums[1], nums[2]))
console.log(add(...nums)) // unpacking

console.log('-------------------------')

const fruits1 = ['🍎','🎃']
const fruits2 = ['🍋','🥑']

let arr = fruits1.concat(fruits2)
console.log(arr)
arr = [...fruits1, ...fruits2]
console.log(arr)
arr = [...fruits1, '🍕' ,...fruits2]
console.log(arr)

console.log('-------------------------')
const apple = {name:'김사과', age:20, address: {si:'서울시', gu:'서초구', dong:"양재동"}}
console.log(apple)
const new_apple = {...apple, job:'프로그래머'}
console.log(apple)
console.log(new_apple)

console.log('-------------------------')

const fruits = [ '🍎', '🎃', '🍋', '🥑' ]
const [fruit1, fruit2, ...others] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(others)

console.log('-------------------------')

function sendEmoji() {
    return [ '🍎', '🎃', '🍋', '🥑' ]
}

const [f1, f2, f3, f4] = sendEmoji()
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

console.log('-------------------------')

console.log(new_apple)

function display({name, age, address, job}) {
    console.log('이름', name)
    console.log('나이', age)
    console.log('주소', address)
    console.log('직업', job)
}

display(new_apple)

console.log('-------------------------')

const {name, age, pet='루시', address, job: hobby} = new_apple      // 예상과 다르게 hobby라는 키값으로 바뀐다
console.log(name)
console.log(age)
console.log(pet)
console.log(address)
console.log(hobby)
// console.log(job)

console.log('-------------------------')

const component = {
    name: 'Button',
    styles: {
        size: 20, color: 'black'
    }
}

function changeColor({ styles: {color}}) {
    console.log(color)
}

changeColor(component)