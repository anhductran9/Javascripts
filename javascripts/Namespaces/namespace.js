/* let colorDiv, divA;

colorDiv = function(ev){
    let target = ev.currentTarget;
    target.style.backgroundColor = 'purple';
    target.style.color  = 'white';
}
divA = document.getElementById('output');
divA.addEventListener('mouseout', colorDiv); */

let STEVE = {
    colorDiv: function(ev){
        let target = ev.currentTarget;
        target.style.backgroundColor = 'purple';
        target.style.color  = 'white';
    },
    init: function(){
        divA = document.getElementById('output');
        divA.addEventListener('mouseout', STEVE.colorDiv);
    }
}
STEVE.init();