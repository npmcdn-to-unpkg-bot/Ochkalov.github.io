var app = require('../js/js1.js');

describe("app", function() {
    it("It should pow method test 1", function() {
        var result;

        result = app.Fpow(2,3);

        expect(result).toBe(8);
    });

    it("It should pow method test 2", function() {
        var result;

        result = app.Fpow(3,4);

        expect(result).toBe(81);
    });

    it("It should pow method test 3", function() {
        var result;

        result = app.Fpow(4,5);

        expect(result).toBe(1024);
    });
});