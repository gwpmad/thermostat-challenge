

describe("plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("plane has a flying status", function(){
    expect(plane.flying).toEqual(true);
  });

  it("can change a planes status", function(){
    plane.landed();
    expect(plane.flying).toEqual(false);
  });

  it("can the status back to flying", function(){
    plane.landed();
    plane.takeoff();
    expect(plane.flying).toEqual(true);
  });
});
