"use strict";

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
            a4: objAnswLocalGet[3],
            a5: objAnswLocalGet[4],
            correctAnswer: 0, // нумерация ответов с нуля!
            input1: '<input type=radio class="list-unstyled" name="q' + 1 + '" value="' + 0 + '">',
            input2: '<input type=radio class="list-unstyled" name="q' + 1 + '" value="' + 1 + '">',
            input3: '<input type=radio class="list-unstyled" name="q' + 1 + '" value="' + 2 + '">',
            input4: '<input type=radio class="list-unstyled" name="q' + 1 + '" value="' + 3 + '">',
            input5: '<input type=radio class="list-unstyled" name="q' + 1 + '" value="' + 4 + '">'
        },
        {
            q: objQweLocalGet[1],
            a1: objAnswLocalGet[0],
            a2: objAnswLocalGet[1],
            a3: objAnswLocalGet[2],
            a4: objAnswLocalGet[3],
            a5: objAnswLocalGet[4],
            correctAnswer: 3,
            input1: '<input type=radio class="list-unstyled" name="q' + 2 + '" value="' + 0 + '">',
            input2: '<input type=radio class="list-unstyled" name="q' + 2 + '" value="' + 1 + '">',
            input3: '<input type=radio class="list-unstyled" name="q' + 2 + '" value="' + 2 + '">',
            input4: '<input type=radio class="list-unstyled" name="q' + 2 + '" value="' + 3 + '">',
            input5: '<input type=radio class="list-unstyled" name="q' + 2 + '" value="' + 4 + '">'
        },
        {
            q: objQweLocalGet[2],
            a1: objAnswLocalGet[0],
            a2: objAnswLocalGet[1],
            a3: objAnswLocalGet[2],
            a4: objAnswLocalGet[3],
            a5: objAnswLocalGet[4],
            correctAnswer: 0,
            input1: '<input type=radio class="list-unstyled" name="q' + 3 + '" value="' + 0 + '">',
            input2: '<input type=radio class="list-unstyled" name="q' + 3 + '" value="' + 1 + '">',
            input3: '<input type=radio class="list-unstyled" name="q' + 3 + '" value="' + 2 + '">',
            input4: '<input type=radio class="list-unstyled" name="q' + 3 + '" value="' + 3 + '">',
            input5: '<input type=radio class="list-unstyled" name="q' + 3 + '" value="' + 4 + '">'
        }


    ];


    var content = tmpl(html, {
        data: test
    });

    $('body').append(content);
    $('button').on('click', function (e) {
        e.preventDefault();

    });


    $( "button" ).on( "click", Score);


    var yourAns = new Array;
    var score = 0;

    $( "input" ).on( "click", Engine);



    function Engine(question, answer) {
         // console.log('question',question);


        var qwest = (parseNum(question.target.name)) -1;
       // console.log('Вопрос № ',qwest);

         // yourAns[question] = answer;
        answer = parseInt(question.currentTarget.value);
        yourAns[qwest] = answer;
        /*console.log('Ответа № ',answer);
        console.log('yourAns[]=',yourAns);*/
    }

    function parseNum(str){
        return parseInt(String(str).match(/-?\d+(?:\.\d+)?/g, '') || 0, 10);
    }



    function Score(){
        var answerText = "Результаты:\n";

      //  console.log('yourAns.length',yourAns.length);



        for( var i = 0; i < yourAns.length; ++i){

            var num = i+1;
            answerText = answerText+"<br/>\n    Вопрос №"+ num +"" ;

            if(yourAns[i]!= test[i].correctAnswer){
                // console.log('yourAns[i]',yourAns[i]);
                answerText = answerText+": НЕ Верно! \n";

                /*answerText = answerText+"\n    Правильный ответ: " +
                    test[i].answers[test[i].correctAnswer] + "\n";*/

            }
            else{
                answerText = answerText+": Верно! \n";
                ++score;
            }
        }

        answerText = answerText +"<br/><br/>\n Всего правильных ответов: "+score+"\n";

        // alert(answerText);
    $('.textpop').html(answerText);

        yourAns = [];
        score = 0;
        clearForm("quiz");

    }



    function clearForm(name) {
        var f = document.forms[name];
        for(var i = 0; i < f.elements.length; ++i) {
            if(f.elements[i].checked)
                f.elements[i].checked = false;
        }
    }


    /*for(var q=0; q<test.length; ++q) {
     var question = test[q];
     var idx = 1 + q;

     // document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
     for(var i in question.answers) {
     document.writeln('<input type=radio name="q' + idx + '" value="' + i +
     '" onClick="Engine(' + q + ', this.value)">' + '<br/>');
     }
     }
*/



});