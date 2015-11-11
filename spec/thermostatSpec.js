describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('is on power saving mode as default', function(){
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('increase the temperature by 1', function(){
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  it('decrease the temperature by 1', function(){
    thermostat.down(1);
    expect(thermostat.temperature).toEqual(19);
  });

  it('raises an error when trying to take temp below 10', function(){
    thermostat.down(10);
    expect(function(){thermostat.down(1);}).toThrowError("10 is the minimum");
  });

  it('raises an error when trying to take temp above 25 (power saving on)', function(){
    thermostat.up(5);
    expect(function(){thermostat.up(1);}).toThrowError("25 is the max when saving power");
  });

  it('raises an error when trying to take temp above 32 (power saving off)', function(){
    thermostat.powerSavingSwitch();
    thermostat.up(12);
    expect(function(){thermostat.up(1);}).toThrowError("32 is the max when not saving power");
  });

  it('resets the temperature to 20', function(){
    thermostat.up(1);
    thermostat.temperatureReset();
    expect(thermostat.temperature).toEqual(20);
  });


  describe('displaying usage levels', function() {
  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      thermostat.down(3);
      expect(thermostat.colour()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.colour()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingSwitch()
      thermostat.up(6);
      expect(thermostat.colour()).toEqual('high-usage');
    });
  });
});
});
