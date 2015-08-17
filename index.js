var particleBeam = require('./lib/particle-beam');

module.exports = function (config) {
  'use strict';

  return particleBeam.bind(config);
};
