//   рендеринг через JS

var divWrapper = document.createElement('div');
divWrapper.className = 'container';
var div = document.createElement('div');
div.className = 'col-xs-9';
var h1 = document.createElement('h1');
h1.className = 'text-center';
var textElemH1 = document.createTextNode('Тест по программированию');



var divButton = document.createElement('div');
divButton.className = ' my-btn';
var button = document.createElement('button');
button.className = 'btn btn-default btn-lg col-md-4';


document.body.appendChild(divWrapper);


divWrapper.appendChild(h1);
h1.appendChild(textElemH1);




var qwe = ["1. Какой формат передачи данных наиболее распостранен?",
    "2. Какой объект для работы с XML файлами втроен во все современные браузеры?",
    "3. Какой объект для работы с JSON файлами втроен во все современные браузеры?"];

var answ = ['JSON','XML','SQL','Такого объекта нет. Необходимо пользоваться внешними библиотеками.','XMLParser'];
//////////////////   рендеринг через JS
for (var i = 0; i < qwe.length; i++){
    var textElemH2Q1 = document.createTextNode(qwe[i]);
    divWrapper.appendChild(div);
    var h2 = document.createElement('h2');
    div.appendChild(h2);
     h2.appendChild(textElemH2Q1);
    var form = document.createElement('form');
    div.appendChild(form);
    var ul = document.createElement('ul');
    form.appendChild(ul);


////////////////////////////////////////////
for (var a = 0; a < answ.length; a++){
    var textInput = document.createTextNode(answ[a]);

    var li = document.createElement('li');
    li.className = 'list-unstyled';

    var label = document.createElement('label');
    var span = document.createElement('span');
    var input = document.createElement('input');
    input.setAttribute('type', 'radio'); //checkbox
    input.setAttribute('name', 'answers');


    ul.appendChild(li);
    li.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
    span.appendChild(textInput);
};

};
/////////////////////////////////////
divWrapper.appendChild(divButton);
divButton.appendChild(button);
button.textContent = 'Проверить мои результаты';