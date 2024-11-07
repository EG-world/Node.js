/*
class Animal {
    constructor(color) {
        this.color = color
    }

    eat() {
        console.log('먹습니다')
    }

    sleep() {
        console.log('잡니다')
    }
}

class Dog extends Animal {
    constructor(color) {
        super(color)
    }

    play() {
        console.log('놉니다')
    }

    eat() {
        console.log('맛있게 먹습니다')
    }
}

const Rucy = new Dog('흰색')
console.log(Rucy)
Rucy.eat()
Rucy.sleep()
Rucy.play()
*/

/* 
    문제
    정직원, 아르바이트생을 나타낼 수 있는 클래스를 설계
    부모 클래스 : Employee
    자식 클래스 : FullTimeEmployee, PartTimeEmployee
    직원의 정보 : 이름, 부서명, 한달 근무시간
    급여 : 정직원(일 200,000원), 아르바이트(일 100,000원)
    calculatePay() : 매달 직원들의 정보를 이용해서 한달 급여를 계산하는 메서드를 구현
    단, 한달 근무일수는 21일로 함

    const kim = new FullTimeEmployee('김사과', '개발팀')
    const ban = new PartTimeEmployee('바나나', 'QA팀')
    console.log(kim.calculatePay())
    console.log(ban.calculatePay())
*/

// class Employee {
//     constructor(name, type, worktime=21) {
//         this.name = name 
//         this.type = type
//         this.worktime = worktime
//     }

//     calculatePay() {
//         return 200000 * this.worktime
//     }
// }

// class FullTimeEmployee extends Employee{
//     constructor(name, type, worktime) {
//         super(name, type, worktime)
//     }
// }

// class PartTimeEmployee extends Employee{
//     constructor(name, type, worktime) {
//         super(name, type, worktime)
//     }

//     calculatePay() {
//         return 100000 * this.worktime
//     }
// }
// const kim = new FullTimeEmployee('김사과', '개발팀')
// const ban = new PartTimeEmployee('바나나', 'QA팀')
// console.log(kim.calculatePay())
// console.log(ban.calculatePay())

class Employee {
    static daysPerMonth = 21
    constructor(name, department, payRate) {
        this.name = name
        this.department = department
        this.payRate = payRate
    }

    calculate() {
        return this.payRate * Employee.daysPerMonth
    }
}

class FullTimeEmployee extends Employee {
    static PAY_RATE = 200000
    constructor(name, department) {
        super(name,department, FullTimeEmployee.PAY_RATE)
    }
}

class PartTimeEmployee extends Employee {
    static PAY_RATE = 100000
    constructor(name, department) {
        super(name,department, PartTimeEmployee.PAY_RATE)
    }
}

