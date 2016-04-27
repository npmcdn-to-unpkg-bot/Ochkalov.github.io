//объявляем переменные
var base = 60;
var clocktimer,dateObj,dh,dm,ds,ms,msV;
var endDate, cdateObj;
var timePause = 0;  // время паузы
var t;
var readout1='';
var readout2='';
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0;

//console.log('textContent',document.getElementById('time').textContent);
document.querySelector('.clear').addEventListener('click',clearСlock, false);
var startTimer = document.querySelector('.start').addEventListener('click',pause, false);


//функция для очистки поля
function clearСlock() {
	clearTimeout(clocktimer);

	h=1;m=1;tm=1;s=0;ts=0;ms=0;
    timePause = 0;
	init=0;show=true;
	readout1='00:00:00';
    readout2='0';
	document.getElementById('time').textContent = readout1;
  document.getElementById('time-ms').textContent = readout2;
//	ii = 0;
}
//функция для старта секундомера ///////////////////
function startTIME() {
 //   console.log('show=startTIME==',show);
     cdateObj = new Date();
		 console.log('s==',s);

    t = ( cdateObj.getTime() -  dateObj.getTime()  ) -(s*1000);
  //  console.log('t1==',( cdateObj.getTime() -  dateObj.getTime()  ) -(s*1000));
	//	console.log('t2==',cdateObj.getTime() -  dateObj.getTime() + timePause);
    if (t>999) { s++; }
		if (s>=(m*base)) {
		ts = 0;
		m++;
	} else {
		ts=parseInt((ms/100)+s);
		if(ts>=base) { ts=ts-((m-1)*base); }
	}
	if (m>(h*base)) {
		tm=1;
		h++;
	} else {
		tm=parseInt((ms/100)+m);
		if(tm>=base) { tm=tm-((h-1)*base); }
	}
// вывод милисек в 000
    msV = t/1;
    ///////
    ms = Math.round(t/10);
 //  console.log('ms=',ms);
	if (ms>99) {ms=000;}
	if (ms==0) {ms='000';}
	if (ms>0 && ms<=9) { ms = '0'+ms; }

    if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
	dm=tm-1;
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }
	dh=h-1;
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
	readout1 = dh + ':' + dm + ':' + ds;
    readout2 =  msV;

	if (show==true) {
        document.getElementById('time').textContent = readout1;
        document.getElementById('time-ms').textContent = readout2;
    }
	clocktimer = setTimeout("startTIME()",1);

}
//функция для паузы
function pause() {
         ///////////////  смена кнопки и класса
  var btnPouse = document.querySelector('.start');
      if (this.className === 'btn start') {
         var textPouse = this.textContent = 'Pouse';
         btnPouse.className = 'btn pouse';
     } else {
         this.className = 'btn start';
         textPouse = this.textContent = 'Start';
     }
  ////////////////////////

	if (init==0) {
        dateObj = new Date();
  //      console.log('Date====',dateObj);
	startTIME();
	init=1;

    } else {
        if(show==true) {
        show=false;
      endDate = new Date();
    //  dateObj = endDate;
      clearTimeout(clocktimer);
		//  console.log('ENDdate===',endDate);
    //   console.log('====');
 	} else {
        show=true;
      //  dateObj = endDate;
        // время паузы
				dateObj = new Date();
			timePause = dateObj.getMilliseconds() - endDate.getMilliseconds();
			 startTIME();
		//	 dateObj = timePause;
        console.log('endDate.getTime()==',endDate.getMilliseconds());
        console.log('dateObj.getTime()==',dateObj.getMilliseconds());
        console.log('timePause==',timePause);

        // для запуска после паузы
       // dateObj = timePause - endDate;
    }
    }
}
