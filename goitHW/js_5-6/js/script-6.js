			var time = 0;
			var running = 0;

      document.querySelector('.clear').addEventListener('click',reset, false);
      var startTimer = document.querySelector('.start').addEventListener('click',startPause, false);


			function startPause()
			{
				if(running == 0){
					running = 1;
					increment();
				//	document.getElementById("startPause").innerHTML = "Pause";
        var btnPouse = document.querySelector('.start');
            this.className === 'btn start'
               var textPouse = this.textContent = 'Pouse';
               btnPouse.className = 'btn pouse';
				}else{
					running = 0;
					// document.getElementById("startPause").innerHTML = "Resmume";
          this.className = 'btn start';
          textPouse = this.textContent = 'Start';
				}
			}

			function reset()
			{
				running = 0;
        time = -1;
        clearTimeout(increment);
        document.getElementById('time').textContent = '00:00:00';
        document.getElementById('time-ms').textContent = '0';
        /// кнопка Смена
        if  (document.querySelector('.pouse')){
        var resetPouseStart = document.querySelector('.pouse');
        resetPouseStart.className === 'btn pouse'
        resetPouseStart.className = 'btn start';
        textPouse = resetPouseStart.textContent = 'Start';
      }
				// document.getElementById("startPause").innerHTML = "Start";
				// document.getElementById("output").innerHTML = "00:00:00";
			}

			function increment()
			{
				if(running == 1){
					setTimeout(function(){
						time++;
            var hh = Math.floor(time/100/60/60);
						var mins = Math.floor(time/100/60);
						var secs = Math.floor(time/100 % 60);   // 10
						var tenths = time % 100;  // % 10
 // console.log('time=======',time);
            if(hh < 10){
              hh = "0" + hh;
            }
						if(mins < 10){
							mins = "0" + mins;
						}
						if(secs < 10){
							secs = "0" + secs;
						}
            document.getElementById('time').textContent = hh + ":" + mins + ":" + secs;
            document.getElementById('time-ms').textContent = tenths;
						// document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
						increment();

					},10);  // 100
				}
			}
