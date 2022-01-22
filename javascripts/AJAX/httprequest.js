var uri = 'http://jsonplaceholder.typicode.com/users/7';
//none of these examples do proper error handling of nasty http status codes or
//invalid data types - text, xml, json, etc
fetch(uri)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        //error handling network request
    });
