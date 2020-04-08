//闭包
//作用域应用的特殊情况，有两种表现：
// 1. 函数作为参数被传递
// 2. 函数作为返回值被返回


//函数作为返回值
// function create(){
//     let a = 100;
//
//     return function () {
//         console.log(a);
//     }
// }
//
// let fn = create();
// let a = 200;
//fn();

//函数作为参数
function print(fn){
    let b = 200;
    fn();
}

let b = 100;

function xxx(){
    console.log(b);
}

xxx();
print(xxx);

//结论，函数寻找自由变量是从函数定义的地方开始找的