const assert = require('assert')
const Math = require('mocha');
const expect = require('chai').expect;

let value = 0;

describe("Sum two nunbers", function () {

    beforeEach(function () {
        value = 0;
    });

    it("Sum Numbers", function (done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    it("Multiply Numbers", function () {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});
