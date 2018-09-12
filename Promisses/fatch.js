fetch('http://great.jokes/christmas', {
    method: 'get'
}).then(function (response) {
    response.json()
}).catch(function (err) {
    // Error :(
});