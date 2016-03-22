var divWrapper = document.createElement('div');
    divWrapper.className = 'container';
var div = document.createElement('div');
    div.className = 'col-xs-9';
var h1 = document.createElement('h1');
    h1.className = 'text-center';
var textElemH1 = document.createTextNode('Тест по программированию');
var h2 = document.createElement('h2');
var ul = document.createElement('ul');
var li = document.createElement('li');
    li.className = 'list-unstyled';
var textElemH2Q1 = document.createTextNode('1. Вопрос №1');
/*var textElemH2Q2 = document.createTextNode('2. Вопрос №2');
var textElemH2Q3 = document.createTextNode('3. Вопрос №3');*/
var form = document.createElement('form');
var label = document.createElement('label');
var span = document.createElement('span');
var textInputV1 = document.createTextNode('Вариант ответа №1');
//var textInputV2 = document.innerHTML('Вариант ответа №2');
//var textInputV3 = document.createTextNode('Вариант ответа №3');
var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');

var divButton = document.createElement('div');
    divButton.className = ' my-btn';
var button = document.createElement('button');
    button.className = 'btn btn-default btn-lg col-md-4';


document.body.appendChild(divWrapper);


divWrapper.appendChild(h1);
h1.appendChild(textElemH1);

divWrapper.appendChild(div);
//document.body.appendChild(h2);
  div.appendChild(h2);
    h2.appendChild(textElemH2Q1);       
        div.appendChild(form);
        form.appendChild(ul);
        
        ul.appendChild(li);
        li.appendChild(label);
        label.appendChild(input);
        label.appendChild(span);
        span.appendChild(textInputV1);
       

var li2 = li.cloneNode(true);
    li2.querySelector('span').textContent = 'Вариант ответа №2';
    li.parentNode.appendChild(li2);
    
var li3 = li.cloneNode(true);
    li3.querySelector('span').textContent = 'Вариант ответа №3';
    li.parentNode.appendChild(li3);    

var div2 = div.cloneNode(true);
    div2.querySelector('h2').textContent = '2. Вопрос №2';
    div.parentNode.appendChild(div2);
    
var div3 = div.cloneNode(true);
    div3.querySelector('h2').textContent = '3. Вопрос №3';
    div.parentNode.appendChild(div3);

divWrapper.appendChild(divButton);
divButton.appendChild(button);
button.textContent = 'Проверить мои результаты';
