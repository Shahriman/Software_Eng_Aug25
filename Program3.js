//Update by Shahriman on 15 Sept 2023, at 3.40pm.

const axios = require('axios');

const querystr = `https://api.openweathermap.org/data/2.5/weather?q=London`;


axios.get(querystr).then( (response) =>{
console.log(response.data);
}
);