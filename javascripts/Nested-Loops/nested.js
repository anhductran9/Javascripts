//How to use nested loops to access all the elements and properties inside multi-dimensional Arrays and Objects.
//Nested loops and multi-dimensional objects
//We can use nested loops to access all the elements
//Inside multi-dimensional arrays or objects

let twoD = [[1,2,3,4,5,6],
            [7,8,9,10,11,12],
            [13,14,15,16,17]];

let bigHero = {characters:[
                {name:'Hiro', VA:'Ryan Potter'},
                {name:'Baymax', VA:'Scott Adsit'},
                {name:'Tamago', VA:'Jamie Chung'},
                {name:'Fred', VA:'Miller Tj'}
]};

let chars = bigHero['characters']; //bigHero.characters
for(let i=0; len=chars.length; i<len, i++){
/*     console.log(chars[i]);
    console.log(chars[i].name);
    console.log(chars[i]['voice']); */
    for(let prop in chars[i]){
        console.log(prop,chars[i].prop, chars[i][prop]);
    }
}
//nested for loops
/* let rows = twoD.length;
for (let i = 0; i < rows; i++){ //Senior array
    let items = twoD[i].length; 
    console.log(i, items);
    for (let n = 0; n < items; n++){ //Junior array
        console.log(twoD[i][n]);
    }
} */