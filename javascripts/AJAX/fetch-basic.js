//The latest (ES5 & ES6) way to make AJAX calls from JavaScript in your browser is with the fetch( ) command.
//While the fetch( ) command is actually using JavaScript Promises, 
//this video discusses fetch to explain how it works at a basic level without needed to understand Promises.

//basic fetch
//using jsonplaceholder for the data
//Remember that fetch returns a promise
//HTTP status codes - https://www.restapitutorial.com/httpstatuscode.html
//to test with NODE we need to install the node-fetch package
//npm install node-fetch
//let fetch = require('node-fetch');

//get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random()*20)+1; //id 1 to 20
let uri = root + '/users/' + id;

console.log('FETCH: ', uri);
//any user id higher than 10 will generate an error
fetch(uri)
    .then( function(response) {
        if(response.status == 200){
            return response.json();
        }else{
            throw new Error('Invalid user ID');
        }
    })
    .then((data)=>{
        console.log(data);
        let jsonData = JSON.stringify(data);
        console.log(data);
        let output = document.getElementById('output');
        output.textContent = jsonData;
    })
    .catch((err)=>{
        console.log('ERROR: ', err.message);
    });