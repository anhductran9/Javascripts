// Web storage
// Local storage
// Session storage
// JSON
// setItem getItem
// clear() - erase everything
// removeItem( key ) - delete one item
// key( index ) - get the name of one item

localStorage.setItem('dude', 'Jeffrey Lebowski');
let val = localStorage.getItem('dude');
console.log(val);

let key = 'pacman_highscore';
localStorage.setItem(key, 123123);

let options = {"name":"Walter", 
               "game":"blowling", 
               "weapons":["uzi", "pistol", "grenade"]};
let str = JSON.stringify(options);
localStorage.setItem("Mona", str);

let original = localStorage.getItem("Mona");

console.log(original);
let obj = JSON.parse(original);
console.log(obj);
console.log(obj.weapons[2]);