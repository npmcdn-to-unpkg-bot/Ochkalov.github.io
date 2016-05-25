var app = {
  Fpow: function pow(a, b){
    var result;

    result = Math.pow(a, b);
    return result;
}
};
try {
    var a = prompt('Nomber=', '');
    if (Math.round(a) == a) {
        //            console.log(a);
        var b = prompt('Exponent=', '');
        if (Math.round(b) != b) {
            alert('Введите целое число')
        }
        ;

    } else {
        alert('Введите целое число')
    }
}catch (e){};
console.log(app.Fpow(a, b));

//************************************************
try {
    module.exports = app;
}catch (e){};

