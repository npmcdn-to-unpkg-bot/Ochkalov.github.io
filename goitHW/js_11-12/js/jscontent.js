$(function () {
    var html =  $('#temp').html();
    var article = [
        {
        url: 'img/6.jpg',
        title: 'Article 1',
        samtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda doloremque eos est, excepturi iusto maxime nesciunt porro possimus praesentium, provident quia tenetur, unde. Aut distinctio dolorem et minus numquam?'
        },
        {
        title: 'Article 2',
        samtext: 'est, excepturi iusto maxime nesciunt porro possimus praesentium, provident quia tenetur, unde. Aut distinctio dolorem et minus numquam?'
        }
           ];


    var content = tmpl(html, {
        data: article
    });

    $('body').append(content);
})