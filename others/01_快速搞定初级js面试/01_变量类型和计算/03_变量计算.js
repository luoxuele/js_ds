 // 变量计算-类型转换
 //1. 字符串拼接
 // 2. ==
 // 3. if语句和逻辑运算


 //1. 字符串拼接，数字和boolean和数字都会转换成string
let a = 100 + 10;
let b = 100 + "10";
let c = true + "10";

console.log(a,b,c);

// 2. ==运算符
 //以下5个全是true
 console.log( 100 == "100"); //100转成 "100"
 console.log( 0 == ""); //都转换成false
 console.log( 0 == false);
 console.log( false == "");
 console.log( null == undefined);

 // 结论， 除了==null之外，其它一律用===
 //两个等号会自动转成再比较， ===不会，类型不一样直接false
const obj = {x:100}
if(obj.a == null){};
//相当于：
 if(obj.a === null || obj.a === undefined){};


 // 3. if语句和逻辑运算
 //以下是falsely变量，除此之外都是truly
 console.log("---------------");
 console.log(!!0 === false);
 console.log(!!NaN === false);
 console.log(!!'' === false);
 console.log(!!null === false);
 console.log(!!undefined === false);
 console.log(!!false === false);
