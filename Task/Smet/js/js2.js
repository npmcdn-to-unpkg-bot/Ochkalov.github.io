function timeLoggingDecorator(func){
    var tStart, tEnd;
    console.log('Name =', func());
    tStart = new Date();
    func();
    tEnd = new Date();
    console.log(tEnd.getTime() - tStart.getTime())
    return tEnd.getTime() - tStart.getTime();
}

// console.log('Function has started',  getFnName(arguments.callee));
function fib() {
    return 100*2000/500;
};

fib = timeLoggingDecorator(fib);