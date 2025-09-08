const axios = require('axios');

const apikey = '66e0eb257237a500547089gca009549';
const address = 'Universiti Sains Malaysia, Malaysia';

const querystr1 = `https://geocode.maps.co/search?q=${address}&api_key=${apikey}`;

axios.get(querystr1).then( (response) =>{
console.log(response.data);
}
);