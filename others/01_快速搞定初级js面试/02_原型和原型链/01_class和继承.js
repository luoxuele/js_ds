class Student1{
    constructor(name,number) {
        this.name = name;
        this.number = number;

    }

    sayHi(){
        console.log(
            `姓名 ${this.name} , 学号 ${this.number} 说 你好`
        )
    }
}


//通过类 new 实例对象
// const xiaoming = new Student("小明",100);
//
// console.log(xiaoming.name, xiaoming.number);
// xiaoming.sayHi();
//
// console.log(Student);


//父类
class People{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} eat food`);
    }
}

class Student extends People{
    constructor(name,number) {
        super(name);
        this.number = number;
    }

    sayHi(){
        console.log(`${this.name}-${this.number} : 你好`);
    }
}



class Teacher extends People{
    constructor(name,major) {
        super(name);
        this.major = major;
    }

    teach(){
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

const xiaoming = new Student("小明",100);

//console.log(xiaoming.name, xiaoming.number);
// xiaoming.sayHi();
//
// const wanglaoshi = new Teacher('王老师',"英语");
// wanglaoshi.teach();
//
// xiaoming.eat();
// wanglaoshi.eat();

// console.log(xiaoming instanceof Student);
// console.log(xiaoming instanceof People);
// console.log(xiaoming instanceof Object);
//
// console.log([] instanceof Array);
// console.log([] instanceof Object);
//
// console.log({} instanceof Object);

// class 实际上是函数，是语法糖
console.log(typeof People);
console.log(typeof Student);
console.log(typeof Object);

//隐式原型 和显示原型
console.log(xiaoming.__proto__ === Student.prototype);
//实例的__proto__属性和构造函数的prototype指向的是同一个对象，就是原型对象
console.log(xiaoming.__proto__); //隐式原型
console.log(Student.prototype); //显示原型
console.log(typeof Student.prototype); //原型是一个对象

//原型关系
/*
* 每个class都有显示原型prototype
* 每个实例都有隐式原型 __proto__
* 实例的隐式原型执行class的显示原型（指向的是同一的对象）
* */

// 基于原型的执行规则
/*
    获取属性或执行方法时
    1. 先在自身的属性和方法寻找
    2. 如果找不到就自动到隐式原型去找__proto__

 */


// 原型链
console.log(Student.prototype.__proto__ === People.prototype);