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

class StudentA extends Student{
    constructor(name,number){
        super(name,number);
    }
}

//每个对象都有一个隐式原型对象,隐式原型对象指向的是构造这个对象的构造函数的显示原型对象prototype
//每个函数除了有一个隐式原型对象__proto__,外，还有一个显示原型对象prototype
//函数是一个和普通对象有一点区别的对象

// console.log(typeof Object);
// console.log(typeof Function);

// console.log(typeof Object.__proto__);
// console.log(typeof Object.prototype);
//
// console.log(typeof Function.__proto__);
// console.log(typeof Function.prototype);
// console.log(Function.prototype === Function.__proto__); //true
//Function的显示原型和隐式原型是同一个对象，这个对象是一个特殊的匿名函数对象，没有prototype属性

// console.log(Function.prototype.prototype); //undefined 不存在
// console.log(Function.prototype.__proto__);

// console.log(typeof Object.__proto__); //是一个函数
// console.log(typeof Object.prototype); //object是一个对象
//
// console.log(typeof Object.__proto__.prototype); //undefined
// console.log(typeof Object.__proto__.__proto__); //object是一个对象
//
// console.log(Function.prototype === Function.__proto__);
// console.log(Function.prototype === Object.__proto__);
// console.log(Object.prototype);

// Function.prototype
// Function.__proto__
// Object.__proto__
//上面三个都是一个特殊的函数对象，这个对象只有__proto__隐式原型，没有普通函数都有的prototype显示原型对象

// console.log(Object.prototype === Object.__proto__.__proto__);

// console.log(Object.prototype.__proto__); //null
// console.log(Object.prototype.prototype); //undefined

//结论，除了Function.prototype这个特殊的函数外
//每个函数都有一个隐式原型和一个显示原型
// 用构造函数创建一个对象的时候，会把构造函数的显示原型赋值给实例的隐式原型
//Object.prototype是一个特殊的对象，因为不是函数，没有prototype显示原型，而隐式原型等于null

//当定义一个函数的时候，js解释器会偷偷的用object对象创建一个显示原型对象prototype
//当初始化一个普通对象实例时，js解释器会把函数的显示原型对象赋值给实例隐式原型对象

let xxx = {};
// console.log(xxx.__proto__ === Object.prototype);

function woqu(){
    console.log("我去");
}

//所有的普通函数都是Function创建的
// console.log(woqu.__proto__ === Function.prototype);
// console.log(woqu.prototype.__proto__ === Object.prototype );
// //

// console.log(typeof People);
// console.log(typeof Student);
// console.log(typeof Teacher);

// console.log(People.__proto__ === Function.prototype);
// console.log(People.prototype.__proto__ === Object.prototype);
//
// console.log(Student.__proto__ === People);
// console.log(Student.prototype.__proto__ === People.prototype);
//
// console.log(Teacher.__proto__ === People);
// console.log(Teacher.prototype.__proto__ === People.prototype);


let stu1 = new StudentA("小明",1234);

// console.log(stu1.__proto__ === Student.prototype);
// console.log(Student.prototype.__proto__ === People.prototype);

//instanceof原理
//顺着隐式原型往上面找，
// 当最后一个隐式原型都没有找到的时候，就说明不存在

// console.log(StudentA.__proto__ === Student);

//总结；继承中的两条原型链
//实例中的隐式原型链 子类的隐式原型指向 父类的隐式原型，一直到Object.prototype.__proto__ === null;
//类（构造函数）的prototype 指向父类 ，

console.log(StudentA.__proto__ === Student);
console.log(Student.__proto__ === People);
console.log(People.__proto__ === Function.prototype);
//说明继承的时候做了手脚，把子类的__proto__指向了父类，(构造函数)
//如果没做手脚，子类的__proto__应该指向Function.prototype,因为所有函数都是Function的实例对象

console.log(stu1.__proto__ === StudentA.prototype);
console.log(StudentA.prototype.__proto__ === Student.prototype);
console.log(Student.prototype.__proto__ === People.prototype);
console.log(People.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);


// new构造一个实例对象的时候
// 模拟new 一个实例对象的构造过程
let stu2 = {};
stu2.name = "小明";
stu2.nmber = 1234;
stu2.__proto__ = Student.prototype;

console.log(stu2 instanceof Student);
