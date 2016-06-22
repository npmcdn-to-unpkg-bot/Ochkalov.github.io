function timeLoggingDecorator(func){

    var tStart, tEnd;

    tStart = new Date();
    console.log('Function has started:',  func.name);

    func();
    tEnd = new Date();
    console.log('Function has finished:', func.name,'.', 'Working time:',tEnd.getTime() - tStart.getTime());

    // console.log(tEnd.getTime() - tStart.getTime());

    return tEnd.getTime() - tStart.getTime();
}

function fib() {
    return 100*2000+46842*5474652/500*25498844;
};

fib = timeLoggingDecorator(fib);