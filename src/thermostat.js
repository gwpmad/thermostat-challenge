function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype = {
  up: function(){
    this.temperature += 1;
  },
  down: function(){
    this.temperature -= 1;
  }
};
