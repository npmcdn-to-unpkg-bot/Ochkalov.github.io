requirejs.config({
    paths: {
        'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
        'tmpl':'template'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(
    [
        'jquery', 'tmpl', 'model', 'view','controller'
    ],
    function( $, tmpl, Model, View, Controller){

        var firsToDoList = ['English','HTML','CSS','JavaScript'];
        var newModel = new Model(firsToDoList);
        var newView = new View(newModel);
        var newController = new Controller(newModel, newView);
    }
);