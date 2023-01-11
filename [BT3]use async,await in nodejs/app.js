let max = 0;
async function getSum(arr){
    if(arr instanceof Array){
        for(let i=0;i<arr.length;i++){
            if (max < arr[i]){
                max = arr[i];
            }

        }
        return max;

    }
    throw new Error('input data is incorrect')
}
async function f(){
    try{
        let result = await getSum([3,4,5,7,9,200,2833]);
        console.log(result);
    }
    catch(error){
        console.log(error)
    }
}
f()