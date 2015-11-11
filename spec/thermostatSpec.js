describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increase the temperature by 1', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decrease the temperature by 1', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
});
