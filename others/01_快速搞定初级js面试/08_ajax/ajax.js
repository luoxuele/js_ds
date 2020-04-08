
let url = `https://p.ssl.qhimg.com/dmfd/400_300_/t01548479848e8bfcb0.jpg`

// const xhr = new XMLHttpRequest();
// xhr.open('GET',url,false);
//
// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             console.log(xhr.responseText)
//         }else{
//             console.log("其它情况");
//         }
//     }
// }
//
// xhr.send(null);

// img.onload = function() {}
// img.onerror = function() {}

const xhr = new XMLHttpRequest();
xhr.open('POST',url,true);

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            console.log(xhr.responseText)
        }else{
            console.log("其它情况");
        }
    }
}

const postData = {
    userName:'张三',
    password:'xxx'
}

xhr.send(JSON.stringify(postData));


/*
*   xhr.readyState
* 值	状态	描述
    0	UNSENT	代理被创建，但尚未调用 open() 方法。
    1	OPENED	open() 方法已经被调用。
    2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
    3	LOADING	下载中； responseText 属性已经包含部分数据。
    4	DONE	下载操作已完成。
*
* */

/*
只读属性 XMLHttpRequest.status 返回了XMLHttpRequest 响应中的数字状态码。
status 的值是一个无符号短整型。在请求完成前，status的值为0。值得注意的是，
如果 XMLHttpRequest 出错，浏览器返回的 status 也为0。

status码是标准的HTTP status codes。
举个例子，status 200 代表一个成功的请求。
如果服务器响应中没有明确指定status码，XMLHttpRequest.status 将会默认为200
Informational responses (100–199),
Successful responses (200–299),
Redirects (300–399),
Client errors (400–499),
and Server errors (500–599).
*
* */