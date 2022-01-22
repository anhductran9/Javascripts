//Going beyond just the basics of using fetch for AJAX calls, this video talks about the finer details of using custom Request objects, 
//custom Header objects, as well as some of the methods that are available to deal with the response.

//fetch using a Request and a Header objects
const uri = 'http://jsonplaceholder.typicode.com/users';
//new Request(uri)
//new Request(uri, options)
//options - method, headers, body, mode
//methods - GET (automatically get data again and again from the web), 
          //POST (get data sent back but also provided data, use this to update), 
          //PUT (put some data to the server and have some data sent back to me), 
          //DELETE (send some parameter to delete something and get the response back from the server), 
          //OPTIONS (just get the header back to see how things work, test the connection)

//new Headers()
//headers.append(name, value) //add headers to the headers object once it being sent
//Content-Type, Content-Length, Accept, Accept-Language, X-Requested-With, User-Agent

let h = new Headers()
h.append('Accept', 'application/json');
let req = new Request(uri, {
    //method: 'GET',
    method: 'POST', //Create the user 11 after the previous 10 users
    headers: h,
    mode: 'cors'
});

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Bad HTTP stuff');
        }
    })
    .then((jsonData)=>{
        console.log(jsonData);
    })
    .catch((err)=>{
        console.log('ERROR:', err.message);
    });