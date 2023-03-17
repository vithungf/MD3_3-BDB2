
const axios = require('axios');
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

async function getPictureOfDay(){
    let json = await axios.get(url);
    return json.data
}
getPictureOfDay().then((result)=>{console.log(result)})