var timers = {};
function getFnName(fn) {
    return fn.toString().match(/function ([^(]*)\(/)[1];
}
// прибавит время выполнения f к таймеру timers[timer]

function timingDecorator(f, timer) {

    // console.log(getFnName(f));

    console.log('Function has started',  getFnName(arguments.callee));
    console.log('Function has started',  arguments);
    return function() {

        console.log('Function has started 2',  arguments.callee.name);
        var start = performance.now();

        var result = f.apply(this, arguments); // (*)

        if (!timers[timer]) timers[timer] = 0;
        timers[timer] += performance.now() - start;

        return result;
    }
}

// функция может быть произвольной, например такой:
var fibonacci = function f(n) {
    return (n > 2) ? f(n - 1) + f(n - 2) : 1;
};

// использование: завернём fibonacci в декоратор
fibonacci = timingDecorator(fibonacci, "fibo");

// неоднократные вызовы...
console.log( fibonacci(10) ); // 55
console.log( fibonacci(20) ); // 6765
// ...

// в любой момент можно получить общее количество времени на вызовы
console.log( timers.fibo + 'мс' );