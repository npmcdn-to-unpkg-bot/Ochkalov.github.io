function timeLoggingDecorator( func ) {
    return function() {
        console.log('Function has started: ' + func.name);
        var timeStart = performance.now();
        // var timeStart = new Date();
        var result = func.apply(this, arguments);
        var timing = performance.now() - timeStart;
        // var timing = new Date() - timeStart;
        console.log('Function has finished: ' + func.name + '. Working time: ' + timing);
        return result;
    }
}
    Array.prototype.join = timeLoggingDecorator(Array.prototype.join);
    console.log([1,2,3].join('-'));