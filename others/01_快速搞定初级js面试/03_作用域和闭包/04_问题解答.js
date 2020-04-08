// 1. this的不同应用场景，如何取值
// 2. 手写bind函数
// 3. 实际开发中闭包的应用场景， 举例说明


//创建10个《a>标签，点击的时候弹出相对应的序号
// let i,a;
// for(i=0; i<10; i++){
//     a = document.createElement('a');
//     a.innerHTML = i+"xxxxxxxxxxx"+ '<br>'
//
//     a.addEventListener("click",function (e) {
//         e.preventDefault();
//         console.log(i)
//     })
//
//     document.body.appendChild(a);
// }


//手写bind
function fn1(a,b,c){
    console.log("this",this);
    console.log(a,b,c);

    return "this is fn1";
}

// const fn2 = fn1.bind({x:100},10,20,30);
const fn2 = fn1.bind({x:100});

// fn1(10,20,30);
// fn2(20,30,40)

//模拟bind
Function.prototype.bind1 = function(){
    //将参数拆解为数组
    const args = Array.prototype.slice.call(arguments);

    //获取this,把数组的第一项取出来
    const t = args.shift();

    //fn1.bind() 中的fn1
    const self = this;

    return function(){
        return self.apply(t,args);
    }

}

//闭包的应用
//隐藏数据，只提供api

function createCache(){
    const data = {} //闭包中的数据，被隐藏了
    return {
        set: function(key, val){
            data[key] =val;
        },

        get: function (key){
            return data[key];
        }
    }
}


const c = createCache();
c.set('a',100);

console.log(c.get('a'));
//只能通过set和get修改和获取data值

// let a;
//let i，i是块级作用域
// for(let i=0; i<10; i++){
//     a = document.createElement('a');
//     a.innerHTML = i+"xxxxxxxxxxx"+ '<br>'
//
//     a.addEventListener("click",function (e) {
//         e.preventDefault();
//         console.log(i)
//     })
//
//     document.body.appendChild(a);
// }