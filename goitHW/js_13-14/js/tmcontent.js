$(function () {
    var html =  $('#temp').html();
    var test = [
        {
            q: qwe[0],
            a1: answ[0],
            a2: answ[1],
            a3: answ[2],
            a4: answ[3]
        },
        {
            q: qwe[1],
            a1: answ[0],
            a2: answ[1],
            a3: answ[2],
            a4: answ[3]
        },
        {
            q: qwe[2],
            a1: answ[0],
            a2: answ[1],
            a3: answ[2],
            a4: answ[3]
        }
    ];


    var content = tmpl(html, {
        data: test
    });

    $('body').append(content);
})