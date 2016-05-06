console.log('script2 Load');

var wrappper = document.querySelector('.wrapper');

var p = document.createElement('p');
    p.className = 'item';
var text = document.createTextNode('script2');
    wrappper.appendChild(p);
    p.appendChild(text);