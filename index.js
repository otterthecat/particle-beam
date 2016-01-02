'use strict';
var particleBeam = require('./lib/particle-beam');

/*
  'config' is an object with following properties:
    - device: ID of specific board you wish to control
    - token: ID issued by Particle to allow access to your devices
*/
module.exports = function (config) {
  return particleBeam.bind(config);
};
