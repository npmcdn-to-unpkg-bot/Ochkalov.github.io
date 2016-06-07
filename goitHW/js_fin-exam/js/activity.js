function render(data) {
    $('.holiday-activity__content').empty();
    
    var $html = $('#holiday-activity').html();
    var $template = tmpl($html,{
        data: data
    });
    $('.holiday-activity__content').append($template);
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
    });
}

//  Search

$(function () {
    function httprRequest(e) {
        if(e){
            e.preventDefault();
        }
        var size,search;

        if ($('.search__input').val().length == 0){
            search = '';
        } else{
            search = $('.search__input').val();
        }
   

        var API_KEY = '2686637-cecd3eaeab4d849f02300401a';
        var $url = "http://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(search)+"&per_page=7"+"&image_type=photo";
    



        $('.search__input').val(' ');
        
        $.ajax({
            url: $url,
            metod: 'GET',
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                $('.holiday-activity__content').html(' ');
                var spiner = '<p style="text-align: center;"><img src="img/speener.gif" align="middle" width="100px" height="100px" alt=""></p>';
                
                $('.holiday-activity__content').append(spiner);
            },
            complete: function () {
                },
            success: function (data) {
                render(data);
            }
        })
    }
    
    $('#search__button').on('click',httprRequest);
    $('#target').submit(httprRequest);
    httprRequest();
    
});
