var secondsRemaining;
var intervalHandle;

startCountUp()

function tick() {
    // grab the h1
//    var timeDisplay = document.getElementsByClassName("time");
    var timeDisplay = document.getElementById("time");
    var msDisplay = document.getElementById('time-ms');
  //   console.log('timeDisplay', timeDisplay);
//     console.log('msDisplay', msDisplay);
    
    // turn seconds into hh:mm:ss
    var miSec = setTimeout(0);
    var ms = miSec;
    var sec = Math.floor(miSec / 1000);
  //  sec = sec.toFixed();
    var min = Math.floor(sec / 60);
 //    console.log('secondsRemaining', secondsRemaining);
    var hh  = Math.floor(min / 60);
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
    
    if (miSec >= 1000){
        ms = 0 * miSec;
        ;
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
    // get contents of the "minutes" text box
    // var miSec = 0;
    
    // how many seconds?
  //  secondsRemaining = Math.round(miSec / 1000) ;
    
//    console.log('secondsRemaining', secondsRemaining);
    // every second, call the "tick" function
    intervalHandle = setInterval(tick,1);
   // intervalHandle = setTimeout(tick, 1000);
}