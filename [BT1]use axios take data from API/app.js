const axios = require('axios');
async function getPictureOfDay(){
    let json = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return json.data
}
getPictureOfDay().then((result)=>{console.log(result)})