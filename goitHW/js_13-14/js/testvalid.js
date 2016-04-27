$(function () {
var divQuest = $('.question'),
    indx = -1,
    len = divQuest.length,
    arr1 = [
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 0]
        
    ],
    count = 0;

function fn(a, b) {
    return a.checked == arr1[indx][b]
}




function nextQuestion() {
    next.value = 'Далее';
   
    if (divQuest[indx]) {
        divQuest[indx].style.display = 'none';
        var a = divQuest[indx].$('input'),
            a = [].every.call(a, fn);
        count += +a
    }
    document.querySelector('#okQuestion').innerHTML = "Вопросов пройдено: " + (indx + 1) + " из них правильно: " + count;
    indx++;
    divQuest[indx] && (divQuest[indx].style.display = "block");
    indx < len ? (obj.innerHTML = time) : (next.style.display = "none", obj.innerHTML = "Спасибо!")   };
    
})