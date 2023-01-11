async  function onMyBirthDayAsync(isKayoSick){
    if (!isKayoSick)return 2;
    throw new Error('i am sad')
}
async function doSomethingAsync(){
    try{
        let result = await onMyBirthDayAsync(true);
        console.log(`i have ${result} cake`)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log('party')
    }
}
doSomethingAsync()