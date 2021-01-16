const assert = require('Assert');
const Math = require('..class/Math')
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe("Sum math", function () {
    beforeEach(function () {
        value = 0;
    });

    it("Sum values", function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done()
        });
    });

    it("Multiply Numbers", function () {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });

    it.only("Value", function () {
        const req = {};
        const rest = {
            load: function load() {
                console.log("Called");
            }
        };

        sinon.stub(req, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, rest, 5, 5);

        expect(rest.load.arguments[0][0]).to.equal('index');

    });
});
