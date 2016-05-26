define(
    'view', 
    ['jquery','model'], 

    function() {  

        function View(model){

            var self = this;

            function init() {
                var wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                self.elements = {
                    input: $('.item__value'),
                    addBtn: $('.item__add'),
                    listConteyner: $('.item__list'),
                    inputItem: $('.toDoList__item')
                };

                self.renderList(model.data);
            };

            self.renderList = function(data){
                var list = tmpl($('#list-template').html(), {data: data});
                self.elements.listConteyner.html(list);
            };
            init();
        };

        return View;
    });