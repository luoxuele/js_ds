/**
 * 1. 如何判断一个变量是不是数组
 * 2. 手写一个简易的jquery,考虑插件和扩展性
 * 3. class的原型本质，怎么理解?
 *
 * */


//1. 如何判断一个变量是不是数组
let arr1 = [];
console.log(arr1 instanceof Array);
console.log(arr1 instanceof Function);

//3. class的原型本质，怎么理解?
    //1. 原型和原型链的图示
    //2. 属性和方法的执行规则


// 2. 手写一个简易的jquery,考虑插件和扩展性
class jQuery{
    constructor(selector){

        //result是一个类数组
        const result = document.querySelectorAll(selector);
        const length = result.length;
        this.selector = selector;

        for(let i=0; i<length; i++){
            this[i] = result[i];
        }
        this.length = length;
    }

    get(index){
        return this[index];
    }

    each(fn){
        for(let i=0; i<this.length; i++){
            const elem = this[i];
            fn(elem);
        }
    }

    on(type, fn){
        return this.each(elem =>{
            elem.addEventListener(type, fn, false);
        })
    }

    //扩展更多dom操作
}

//插件--加入到原型
jQuery.prototype.dialog = function (info) {
    alert(info);

}

//造轮子
class myjQuery extends jQuery{
    constructor(selector) {
        super(selector);
    }

    //扩展自己的方法
    addClass(className){

    }
}