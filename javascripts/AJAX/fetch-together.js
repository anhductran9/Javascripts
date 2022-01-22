//fetch user data from jsonplaceholder 
//generate a user list on the web page
//add a click event to the body that will
//refresh the list each time with a random 
//number of users

const uri = 'http://jsonplaceholder.typicode.com/users';

let req = new Request(uri, {
    method: 'GET',
    mode: 'cors'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }
    })
    .then( (jsonData) =>{
        //console.log(jsonData);
        let ul = document.querySelector('#users');
        let df = new DocumentFragment(); //create a document fragment to stick the list and put into the HTML
        jsonData.forEach( (user) =>{
            let li = document.createElement('li');
            let pn = document.createElement('p');
            let pue = document.createElement('p');
            pn.textContent = user.name;
            pue.textContent = ''.concat(user.username, ' - ', user.email);
            pn.className = 'name'; // overwrite the class of its elder div
            pue.classList.add('info'); // not overwrite, just add the class
            li.appendChild(pn);
            li.appendChild(pue);
            df.appendChild(li);
        });
        ul.appendChild(df);
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });