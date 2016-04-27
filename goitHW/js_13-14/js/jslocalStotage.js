//"use strict";

var strQwe = JSON.stringify(qwe);
 //   console.log('strQwe=',strQwe);

var strAnsw = JSON.stringify(answ);
  //  console.log('strAnsw=',strAnsw);

var strQweLocal = localStorage.setItem('strQweLocalKey', strQwe);
    strQweLocalGet = localStorage.getItem('strQweLocalKey')
  //  console.log('strQweLocalGet=', strQweLocalGet);

var strAnswLocal = localStorage.setItem('strAnswLocalKey', strAnsw);
    strAnswLocalGet = localStorage.getItem('strAnswLocalKey')
//    console.log('strAnswLocalGet=', strAnswLocalGet);
