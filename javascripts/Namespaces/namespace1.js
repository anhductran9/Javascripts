/* let colorDiv, divB;

colorDiv = function(ev){
    let target = ev.currentTarget;
    target.style.backgroundColor = 'olive';
    target.style.color = '#333';
}

divB = document.getElementById('output');
divB.addEventListener('mouseover', colorDiv); */

let TONY = {
    colorDiv: function(ev){
        let target = ev.currentTarget;
        target.style.backgroundColor = 'olive';
        target.style.color = '#333';
    },
    init: function(){
        divB = document.getElementById('output');
        divB.addEventListener('mouseover', this.colorDiv);
    }
}
TONY.init();