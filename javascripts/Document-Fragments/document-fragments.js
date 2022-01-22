//How to use a DocumentFragment object to improve the performance of your webpage when you are adding content to the DOM.

//How to use documentFragment objects when dynamically creating new page content

let movies = ['Alien', 'Layer Cake', 'Star Wars', 'Star Trek', 'Jaws', 
            'Jurassic Park', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 
            'Memento', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind', 
            'Good Will Hunting', 'Casino Royale', 'Almost Famous'];

//use the Array movies and create a list of movies on the page
//inside of the <ul id="movies">
let movieList;

document.addEventListener('DOMContentLoaded', init);

function init(){
    movieList = document.getElementById('movies');
    //BAD APPROACH - add new content to DOM one at a time
//    movies.forEach(function(movie){
//        let li = document.createElement('li');
//        li.textContent = movie;
//        li.className = 'bad';
//        movieList.appendChild(li);
//    })


    //GOOD APPROACH - use a documentFragment and update DOM once
    let df = new DocumentFragment();
    movies.forEach( movie => {
        let li = document.createElement('li')
        li.textContent = movie;
        li.className = 'good';
        df.appendChild(li);
    })
    movieList.appendChild(df);
}