
const axios = require('axios');

async function makePostRequest(objeto) {
    axios.post('/', objeto)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
}
export default makePostRequest
   

