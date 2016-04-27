var secondsRemaining;
var intervalHandle;
var btnPouse1;
var miSec,secFull,minFull,hh,sec,min,ms,timeDisplay,msDisplay;
// запуск по клику
document.querySelector('.clear').addEventListener('click',resetCount, false);
var startTimer = document.querySelector('.start').addEventListener('click',startCountUp, false);

// console.log('start',document.querySelector('.start'));



// меняю кнопку на Пауза и смена класса на пауза -удаляю класс старт
//document.querySelector('.start').addEventListener('click',btnPouse, false);
// пойск класса пауза и запуск функции остановки

//document.querySelector('.pouse').addEventListener('click',Pouse, false);
//btnPouse1.className.addEventListener('click',Pouse, false);
//console.log('btnPouse1.className VER', btnPouse1.className);
// если паузу прикрутить к кнопке Очистка то все ОК
/*document.querySelector('.clear').addEventListener('click',function() {
    clearInterval(intervalHandle);
} , false);*/


// Очистка поля
function resetCount(){
    clearTimeout(intervalHandle);
    miSec = 0;
    sec = 0;
    min = 0;
    document.getElementById('time').textContent = '00:00:00';
    document.getElementById('time-ms').textContent = '0';
    console.log('resetCount-----');
}

function btnPouse(){
    var textPouse = this.textContent = 'Pouse';
    this.className = 'btn pouse';
}


function Pouse(){
    

      console.log('Fanction Pouse----');
}

function eventPouse(){
    document.querySelector('.pouse').addEventListener('click',Pouse, false);
    
   // console.log('Event222=');
}

function tick() {
    // grab the h1
//    var timeDisplay = document.getElementsByClassName("time");
    var timeDisplay = document.getElementById("time");
    var msDisplay = document.getElementById('time-ms');
  //   console.log('timeDisplay', timeDisplay);
//     console.log('msDisplay', msDisplay);
    
    // turn seconds into hh:mm:ss
    miSec = setTimeout(0);
   // var ms = miSec;
    var secFull = Math.floor(miSec / 1000);
    var ms = Math.floor(miSec) - (secFull * 1000);
    var minFull = Math.floor((secFull / 60));
    var sec = secFull - (minFull * 60);
  //  var min = Math.floor(sec / 60);
    var hh  = Math.floor(minFull / 60);
    var min = minFull - (hh * 60);
 //    console.log('secondsRemaining', secondsRemaining);
 //   console.log('sec', sec);
    
  //  miSec++;
// console.log('miSec', miSec);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
      
    var message = hh+ ":" + min + ":" + sec;
    var messageMs = ms;
    // now change the display
    timeDisplay.innerHTML = message;
    msDisplay.innerHTML = messageMs;
        
    // subtract from seconds remaining
  //  secondsRemaining++;
}

function startCountUp() {
    intervalHandle = setInterval(tick,1);
     btnPouse1 = document.querySelector('.start');
    
     //   console.log('this.className PRE =', this.className);
    
    if (this.className === 'btn start') {
        var textPouse = this.textContent = 'Pouse';
        var btnStartPouse = btnPouse1.className = 'btn pouse';
      //  console.log('btnPouse1.className POST =', btnPouse1.className);
        console.log('Work Start----');
        eventPouse();
        return btnPouse1.className;
    } else {
     //   console.log('this.className 222 PRE =', this.className);
        this.className = 'btn start';
        textPouse = this.textContent = 'Start';
        console.log('Work Pause----');
    } 
 //  e.preventDefault();
 //  e.stopImmediatePropagation();
}
    
   
    // get contents of the "minutes" text box
    // var miSec = 0;
    
    // how many seconds?
  //  secondsRemaining = Math.round(miSec / 1000) ;
    
//    console.log('secondsRemaining', secondsRemaining);
    // every second, call the "tick" function
    
       // intervalHandle = setTimeout(tick, 1000);
