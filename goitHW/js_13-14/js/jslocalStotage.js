"use strict";

var qwe = ["1. Какой формат передачи данных наиболее распостранен?",
    "2. Какой объект для работы с XML файлами втроен во все современные браузеры?",
    "3. Какой объект для работы с JSON файлами втроен во все современные браузеры?"];

var answ = ['JSON','XML','SQL','Такого объекта нет. Необходимо пользоваться внешними библиотеками.','XMLParser'];

var strQwe = JSON.stringify(qwe);
 //   console.log('strQwe=',strQwe);

var strAnsw = JSON.stringify(answ);
  //  console.log('strAnsw=',strAnsw);

var strQweLocal = localStorage.setItem('strQweLocalKey', strQwe);
var strQweLocalGet = localStorage.getItem('strQweLocalKey');
 //   console.log('strQweLocalGet=', strQweLocalGet);

var strAnswLocal = localStorage.setItem('strAnswLocalKey', strAnsw);
var strAnswLocalGet = localStorage.getItem('strAnswLocalKey');
//    console.log('strAnswLocalGet=', strAnswLocalGet);
    
var objQweLocalGet = JSON.parse(strQweLocalGet);
//    console.log('objQweLocalGet=', objQweLocalGet);

var objAnswLocalGet = JSON.parse(strAnswLocalGet);
//    console.log('objAnswLocalGet=', objAnswLocalGet);