// Owl Carousel

$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:4,
        autoplay:false,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    var owlf = $('#first-slider').owlCarousel();
    $('.first-slider__nav--prev').click(function () {
        owlf.trigger('prev.owl.carousel');
    });

    $('.first-slider__nav--next').click(function () {
        owlf.trigger('next.owl.carousel');
    });

    //second-slider
    var owls = $('#second-slider').owlCarousel();
    $('.second-slider__nav--prev').click(function () {
        owls.trigger('prev.owl.carousel');
    });

    $('.second-slider__nav--next').click(function () {
        owls.trigger('next.owl.carousel');
    });

//    third-slider
    var owlt = $('#third-slider').owlCarousel();
    $('.third-slider__nav--prev').click(function () {
        owlt.trigger('prev.owl.carousel');
    });

    $('.third-slider__nav--next').click(function () {
        owlt.trigger('next.owl.carousel');
    });

    $('.grid').isotope({
        itemSelector: '.grid--item',
        layoutMode: 'masonry'

    });

});
