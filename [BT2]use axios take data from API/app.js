const axios =  require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

axios.get(url)
.then(data => {
    console.log(data.data)
})