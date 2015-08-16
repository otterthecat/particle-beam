var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = function (config) {
  'use strict';

  return function (action, data, callback) {
    switch (arguments.length) {
      case 0:
      case 1:
        throw new Error('Particle-beam requires minimum 2 arguments');

      case 2:
        callback = data;
        data = {};
        break;

      default:
        break;
    }

    if (typeof action !== 'string' || typeof callback !== 'function') {
      throw new Error('Particle-beam has been passed illegal argument(s)');
    }

    config.action = action;

    request.post(buildUrl(config), data, callback);
  };
};
