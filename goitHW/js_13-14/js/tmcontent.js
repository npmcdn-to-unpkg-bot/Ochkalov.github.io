$(function () {
    var html =  $('#temp').html();
    var test = [
       /* {         // из масива обычного 
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
        }*/
        // из localStr
        {         
            q: objQweLocalGet[0],
            a1: objAnswLocalGet[0],
            a2: objAnswLocalGet[1],
            a3: objAnswLocalGet[2],
            a4: objAnswLocalGet[3]
        },
        {
            q: objQweLocalGet[1],
            a1: objAnswLocalGet[0],
            a2: objAnswLocalGet[1],
            a3: objAnswLocalGet[2],
            a4: objAnswLocalGet[3]
        },
        {
            q: objQweLocalGet[2],
            a1: objAnswLocalGet[0],
            a2: objAnswLocalGet[1],
            a3: objAnswLocalGet[2],
            a4: objAnswLocalGet[3]
        }
        
        
    ];


    var content = tmpl(html, {
        data: test
    });

    $('body').append(content);
})