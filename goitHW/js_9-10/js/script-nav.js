$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    }); 


jQuery(document).ready(function(){

jQuery(".sub-menu").mouseenter(
  function () {
	jQuery(this).animate({
		backgroundColor:"#03C",
    }, 500 );
});

jQuery(".sub-menu").mouseleave(function() {
	jQuery(this).animate({
		backgroundColor:"#0CF",
    }, 500 );
});

});

