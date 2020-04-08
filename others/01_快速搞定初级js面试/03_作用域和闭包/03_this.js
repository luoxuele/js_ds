// this取什么值是执行的时候确认的
/*
 1. 作为普通函数
 2. 使用call apply bind
 3. 作为对象方法被调用
 4. 在class方法中调用
 5. 箭头函数
*/

function fn1(){
    console.log(this);
}

// fn1(); //global Object //浏览器下是window

// fn1.call({x:100});  //{x:100}
// const fn2 = fn1.bind({x:100});
// fn2();

// const zhangsan={
//     name: "张三",
//     sayHi(){
//         console.log(this);
//     },
//     wait(){
//         setTimeout(function () {
//             console.log(this); //Timeout， //浏览器中是window
//         },1000);
//     }
// };

const zhangsan={
    name: "张三",
    sayHi(){
        console.log(this);
    },
    wait(){
        setTimeout( () =>{
            console.log(this); //当前对象，并不是window
        },1000);
    }
};

// zhangsan.sayHi();
// zhangsan.wait();

class People{
    constructor(name){
        this.name = name;
        this.age = 20;
    }
    sayHi(){
        console.log(this);
    }
}

const lisi = new People("李四");
lisi.sayHi();