$(function () {


// Это ваши вопросы
    var questions=[
        {
            text: "1. Какой формат передачи данных наиболее распостранен?",
            answers: ["JSON",
                "XML",
                "SQL",
                "Такого объекта нет. Необходимо пользоваться внешними библиотеками.",
                "XMLParser"],
            correctAnswer: 0 // нумерация ответов с нуля!
        },
        {
            text: "2. Какой объект для работы с XML файлами втроен во все современные браузеры?",
            answers: ["JSON",
                "XML",
                "SQL",
                "Такого объекта нет. Необходимо пользоваться внешними библиотеками.",
                "XMLParser"],
            correctAnswer: 4
        },
        {
            text: "3. Какой объект для работы с JSON файлами втроен во все современные браузеры?",
            answers: ["JSON",
                "XML",
                "SQL",
                "Такого объекта нет. Необходимо пользоваться внешними библиотеками.",
                "XMLParser"],
            correctAnswer: 0
        }
    ];


    var yourAns = new Array;
    var score = 0;

    // function Engine(question, answer) {yourAns[question]=answer;}


    function Score(){
        var answerText = "Результаты:\n";

        for(var i = 0; i < yourAns.length; ++i){
            var num = i+1;
            console.log(num);
            answerText = answerText+"\n    Вопрос №"+ num +"";

            if(yourAns[i]!=questions[i].correctAnswer){
                answerText = answerText+"\n    Правильный ответ: " +
                    questions[i].answers[questions[i].correctAnswer] + "\n";
            }
            else{
                answerText = answerText+": Верно! \n";
                ++score;
            }
        }

        answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

        alert(answerText);
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





    /*for(var q=0; q<questions.length; ++q) {
        var question = questions[q];
        var idx = 1 + q;

        document.writeln('<li><span class="quest">' + question.text + '</span><br/>');
        for(var i in question.answers) {
            document.writeln('<input type=radio name="q' + idx + '" value="' + i +
                '" onClick="Engine(' + q + ', this.value)">' + question.answers[i] + '<br/>');
        }
    }*/

    $( "button" ).on( "click", Score);

});