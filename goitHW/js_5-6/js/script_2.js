function startTimer() {
 //   var myTimer = document.getElementsByClassName('time');
    var myTimer = document.getElementById("time");
   // console.log('myTimer=', myTimer);
    var times = myTimer.innerHTML;
//    console.log('times=', times);
    var arr = times.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
   // console.log(arr[2]);
    if (s == 0) {
      if (m == 0) {
        if (h == 0) /*{
          alert("Время вышло");
          window.location.reload();
          return;
        }*/
        h++;
          
        m = 00;
        if (h < 10) h = "0" + h;
      }
      m++;
      if (m < 10) m = "0" + m;
        
        s = 1;
    }
    else s++;
    
    if (s < 10) s = "0" + s;
//    document.getElementsByClassName("time").innerHTML = h+":"+m+":"+s;
    document.getElementById("time").innerHTML = h+":"+m+":"+s;

    setTimeout(startTimer, 1000);
  //  setInterval(startTimer, 1000);
  }

//var btnStart = document.getElementsByClassName('start');
//    btnStart.addEventListener('click', startTimer, false);
startTimer();