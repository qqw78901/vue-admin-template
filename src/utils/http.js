import router from '../routers/index';

const http=(url,data,type)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            type:type||"GET",
            url,
            data,
            dataType:'json',
            timeout:30*1000,
            success(response){
                if(response.status===-999){
                    window.location.reload();
                }
                if(response.status===-888){
                  router.push('/401')
                }
                resolve(response);
            },
            error(response){
                if(response.status != 0) {
                  alert(`查询出错,出错地址为：${url}`);
                }
              console.error(url+ ":" + JSON.stringify(data) + ":" + JSON.stringify(response));
              reject();
            }
        })
    })
};

export default http;
