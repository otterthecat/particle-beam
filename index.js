'use strict';
var particleBeam = require('./lib/particle-beam');

module.exports = function (config) {
  return particleBeam.bind(config);
};
