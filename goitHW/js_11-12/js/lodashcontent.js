(function () {
    var tmple = _.template(document.getElementById('list-template').innerHTML);

// ..а вот и результат

    var article = [
        {
            url: 'img/3.jpg',
            title: 'Article 3',
            samtext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda doloremque eos est, excepturi iusto maxime nesciunt porro possimus praesentium, provident quia tenetur, unde. Aut distinctio dolorem et minus numquam?'
        },
        {
            title: 'Article 4',
            samtext: 'maxime nesciunt porro possimus praesentium, provident quia tenetur, unde. Aut distinctio dolorem et minus numquam?'
        }
    ];


    var content = {
        data: article
    };
    var result = tmple({data: article});
    /////////
    document.write(result);
})();