const fetch = require('node-fetch')

fetch('http://great.jokes/christmas')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));