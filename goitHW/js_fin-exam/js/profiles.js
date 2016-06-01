$(function () {
   var profiles =[
       {
           avatar: 'img/avatar1.jpg',
           name: 'Bradley Hunter',
           info: 'Based in Chicago. I love playing tennis and loud music.',
           status: 'img/tv.png'
       },
       {
           avatar: 'img/avatar2.jpg',
           name: 'Heather Walker',
           info: 'Im a happy person that loves cats and climbing on mountains.',
           status: 'img/colba.png'
       },
       {
           avatar: 'img/avatar3.jpg',
           name: 'Lucas Marsha',
           info: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
           status: 'img/cofe.png'
       },
       {
           avatar: 'img/avatar4.jpg',
           name: 'Bradley Hunter',
           info: 'Based in Chicago. I love playing tennis and loud music.',
           status: 'img/plane.png'
       }
   ];
    var $html = $('#person').html();
    var $template = tmpl($html,{
        data:profiles
    });
    $('.person__box').append($template);
});