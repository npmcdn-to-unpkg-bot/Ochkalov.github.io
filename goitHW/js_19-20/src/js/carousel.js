function gavCarousel(startNumber, scrollCount, visibleCount, objParamSelectors) {

  
    var defaultSelectors = {
        carouselSelector:               '.jCarousel',
        listSelector:                   '.jCarousel__list',
        itemSelector:                   '.jCarousel__item',
        btnPrevSelector:                '.jCarousel__prev',
        btnNextSelector:                '.jCarousel__next',
        paginatorItemSelector:          '.jCarousel__paginator-item',
        paginatorItemActiveSelector:    '.jCarousel__paginator-item--active'
    };

    this.objSelectors =$.extend({}, defaultSelectors, objParamSelectors);
    this._currentItem = 0;
    this.ScrollTo = function (paginatorNumber) {
        $(this.objSelectors.paginatorItemActiveSelector).removeClass(this.objSelectors.paginatorItemActiveSelector.substring(1));   
        this._currentItem = paginatorNumber;   
        $(this.objSelectors.paginatorItemSelector).eq(paginatorNumber).addClass(this.objSelectors.paginatorItemActiveSelector.substring(1));    
        $(this.objSelectors.carouselSelector).jcarousel('scroll', this._currentItem, true);                   
    };
    this.ScrollOffset = function (scrollCount) {
        this._currentItem += scrollCount;
        if (this._currentItem < 0)
            this._currentItem = $(this.objSelectors.paginatorItemSelector).length - 1;
        if (this._currentItem > $(this.objSelectors.paginatorItemSelector).length - 1)
            this._currentItem = 0;
        this.ScrollTo(this._currentItem);

        
    };


    $(this.objSelectors.carouselSelector).jcarousel({
        list: this.objSelectors.listSelector,
        items: this.objSelectors.itemSelector,
        start: startNumber,
        scroll: scrollCount,
        visible: visibleCount,
       
    });
    this.ScrollTo(this._currentItem);

    $(this.objSelectors.btnPrevSelector).on('click', { objCarousel: this }, function () {
        e.data.objCarousel.ScrollOffset(-1);
    });
    $(this.objSelectors.btnNextSelector).on('click', { objCarousel: this }, function () {
        e.data.objCarousel.ScrollOffset(1);
    });

    
    $(this.objSelectors.paginatorItemSelector).on('click', {objCarousel: this},function (e) {
        var pagnum = $(this.parentElement.children).index(this);
        e.data.objCarousel.ScrollTo(pagnum);
    });
}