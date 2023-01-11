const axios = require('axios');

async function getAllUser (){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data.data
}
getAllUser().then((result)=>{
    console.table(result)
})