 const http=(url,data,type)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            type:type||"GET",
            url,
            data,
            dataType:'json',
            timeout:10000,
            success(response){
                resolve(response)
            },
            error(){
                reject();
            }
        })
    })
};

export default http;