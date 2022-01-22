// JavaScript event listeners
// Use event listeners to control user interactions on my web pages, in my web apps, and in my mobile hybrid apps
// Event-driven programming: your program waits for events and uses them as triggers to run the next function(s)

// object.addEventListener(event, function)

//myDiv.addEventListener('click', doSomething)

//function doSomething(ev){
//    console.log( ev.type )//click
//    console.log( ev.target ) //target = myDiv
//    return 7;
//}
document.addEventListener('DOMContentLoaded', init);
function init(){
    let btn = document.getElementById('btn');
    let lnk = document.getElementById('lnk');
    let txt = document.getElementById('txt');

    txt.addEventListener('input', ev=>{
        console.log( ev.target, ev.target.value);
    });

    txt.addEventListener('change', ev=>{
        console.log( ev.target, ev.target.value);
    });

    txt.addEventListener('blur', ev=>{
        console.log( ev.type);
    });

    lnk.addEventListener('click', ev=>{
        ev.preventDefault();
        console.log(ev.type,ev.target)
    });

    btn.addEventListener('click', buttonClicked);
}
function buttonClicked(ev){
    console.log(ev.type, ev.target, ev.currentTarget);
}

//lnk.addEventListener('click', linkClicked);
//function linkClicked(ev){
//    ev.preventDefault(); //stop the link from being followed
//    console.log(ev.type, ev.target, ev.currentTarget);
//}
//The above function equals to
//lnk.addEventListener('click', ev=>{ev.preventDefault;console.log(ev.type,ev.target)});