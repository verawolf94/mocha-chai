//load chai assertion library
const chai = require("chai");
const expect = chai.expect;

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 2",function(){
	expect(calc.add(1,2)).to.be.equal(1);
  });


});

