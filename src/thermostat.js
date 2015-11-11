function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
}

Thermostat.prototype = {
  powerSavingSwitch: function(){
    this.powerSaving = !(this.powerSaving);
  },

  up: function(increment){
    if(this.powerSaving === false && (this.temperature + increment) > 32) {
        throw new Error("32 is the max when not saving power");}
    else if(this.powerSaving === true && (this.temperature + increment) > 25) {
        throw new Error("25 is the max when saving power");}
    else{
        this.temperature += increment;
      }},

  down: function(decrement){
    if(this.temperature === 10) {
      throw new Error("10 is the minimum");}
    else { this.temperature -= decrement;}
      },

  temperatureReset: function(){
    this.temperature = 20;
  }
};
