// //作用域
// 1. 全局作用域
// 2. 函数作用域
// 3. 块级作用域 （es6）

{
    let x = 100;
}

// console.log(x);


//自由变量
// 一个变量在当前作用域中没有定义，但被使用了，
// 向上级作用域，一层一层的寻找，直到找到为止，

let hehe = "呵呵";

function xxx(){
    //hehe ="哈哈";
    console.log(hehe);
}

xxx();