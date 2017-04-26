"strict mode";

var Shape = require('../../src/models/shape.js');

describe("Shape", function(){
  var shape;

  beforeEach(function(){
    shape = new Shape(1, 1, 5, 155, 60, 50);
  });

  it("exists", function(){
    expect(shape).to.exist;
  });

  it(".getPosition returns a hash of the shape's position", function(){
    expect(shape.getPosition()).to.eql({x: 1, y: 1, z: 5});
  });

  it(".getColor returns a hash of the shape's RGB value", function(){
    expect(shape.getColor()).to.eql({r: 155, g: 60, b: 50});
  });

  it(".getPosition returns a hash of the shape's updated position", function(){
    shape.setPosition(0,0,0);
    expect(shape.getPosition()).to.eql({x: 0, y: 0, z: 0});
  });

  it(".getColor returns a hash of the shape's updated color", function(){
    shape.setColor(0,0,0);
    expect(shape.getColor()).to.eql({r: 0, g: 0, b: 0});
  });


});

//X, Y, Z, R, G, B