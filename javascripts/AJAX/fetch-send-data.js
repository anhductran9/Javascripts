//How to use the JavaScript fetch method to send data to the web server.
//The difference between GET and POST is discussed.
//How to use FormData to gather and format data to be sent to the web server as part of an AJAX request.

//Sending Data to the server using Fetch()
//GET - queryStrings
//http://jsonplaceholder.typicode.com/posts?userId=1&postId=65
//http://jsonplaceholder.typicode.com/todos?userId=2
//POST
//http://jsonplaceholder.typicode.com/posts

const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts?userId=1';

let formdata = new FormData();
formdata.append("userId", 3);
formdata.append('title', 'This is my title');
formdata.append('body', 'This is the body text of the post');

let options = {
    method: 'GET',
    //method: 'POST,
    //mode: 'cors',
    //body: formdata
}
let req = new Request(uri,options);

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!')
        }
    })
    .then((j)=>{
        console.log(j);
    })
    .catch((err)=>{
        console.log('ERROR:', err.message);
    });