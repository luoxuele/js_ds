// 1. 网络请求，如ajax图片加载
// 2. 定时任务，如setTimeout

function getData(url){
    return new Promise((resolve,reject) =>{
        $.ajax({
            url,
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        });
    });
}