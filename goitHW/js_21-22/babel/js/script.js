'use strict';

$(function () {
    try {
        var keyQuestions = 'JS_21-22';
        var strQuestions = app.getQuestions(keyQuestions);

        var objQuestions = JSON.parse(strQuestions);

        var htmlData = tmpl('questions_template', objQuestions);
        $(htmlData).insertBefore($('.result-button'));

        // по нажатию на кнопку проверяем правильность ответов
        $('.result-button').on('click', function () {
            var $result = app.isTrueAnswers();

            // выдаем результат в модальном окне
            $('.modalWindow__text')[0].innerHTML = $result ? 'Ответ правильный!' : 'Ответ не правильный!';
            $('.overlay').fadeIn(800, function () {
                $('.modalWindow').css('display', 'block').animate({ opacity: 1, top: '50%' }, 500);
            });

            $('.modalWindow__button').one('click', function () {
                $('.modalWindow').animate({ opacity: 0, top: '45%' }, 500, function () {
                    // пoсле aнимaции
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(800);
                });
            });

            app.clearCheckBoxes();
        });
    } catch (e) {
        alert('Ошибка ' + e.message);
    }
});
