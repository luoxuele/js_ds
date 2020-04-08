// 1. typeof运算符功能
    // 1. 识别所有的值类型
    // 2. 识别函数
    // 3. 判断是否是引用类型 （不可再细分）对象还是数组就分不出来了

let a;
let str ='abc';
let n = 100;
let b = true;
let s = Symbol('s');

console.log(typeof a);
console.log(typeof str);
console.log(typeof n);
console.log(typeof b);
console.log(typeof s);

//能判断函数
console.log(typeof console.log);
console.log(typeof function(){});

//能判断是不是引用，但不能继续识别了(除了函数，其它的引用都是object)
console.log(typeof null);
console.log(typeof ['1',2]);
console.log(typeof {x:100});


// 2. 深拷贝

const obj1 = {
    age:20,
    name:"田玲利",
    address:{
        city:"chengdu"
    },
    arr:['a','b','c']
};

const obj2 = deepClone(obj1);
obj2.address.city= "shanghai";
console.log(obj1.address.city);


function deepClone(obj) {
    if(typeof obj !== 'object' || obj == null){
        return obj;
    }

    //初始化返回结果
    let result;
    if(obj instanceof Array){
        result = [];
    }else{
        result = {};
    }

    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
           result[key] = deepClone(obj[key])
        }


    }
    return result;

}