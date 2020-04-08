

//值类型
let a = 200;
let b = a;
a = 100;

console.log("a = ",a);
console.log("b = ",b);

//引用类型
let obj1 = {age:20};
let obj2 = obj1;

obj2.age = 21;

console.log("obj1.age = ", obj1.age);
console.log("obj2.age = ", obj2.age);

//值类型 存储在栈中

//引用类型 就是一个指针，在栈中存储一个指针，
// 指向的对象存储在堆中


//常见值类型
let v1; //undefined
let v2 = "abc";
let v3 = 100;
let v4 = true;
let v5 = Symbol('s');


//常见引用类型
let obj3 = {x:100};
let arr1 = ['a','b','c'];
let p = null; //特殊引用，指针指向null(null是虚拟内存中的一个地址)
function fn() {};  //特殊引用类型，但不用于存储数据，所以没有“拷贝，复制函数”等操作
//函数就是一个c中的函数指针？函数存的是函数执行的入口地址


