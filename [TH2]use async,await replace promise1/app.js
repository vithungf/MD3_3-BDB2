async  function getDivision(a,b){
    if (b!==0) return(a/b);
    return new Error('math error');
}
async function f(){
    try {
        let result = await getDivision(2,4);
        console.log(result);
    }
    catch (error){
        console.log(error);
    }
}
f();

const promises = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(b!==0){
                resolve(a/b);
            }else{
                reject(new Error('math error'));
            }
        });
    });
};

promises(2,3).then(x=> console.log(x))
        .catch(error=> console.log(error))