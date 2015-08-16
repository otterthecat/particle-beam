'use strict';

var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = function(config){

  return function(action, data, callback){

    switch (arguments.length) {
      case 0:
      case 1:
        throw "Particle-beam requires minimum 2 arguments"
        break;

      case 2:
        callback = data;
        data = {};
        break;

      default:
        break;
    };

    if (typeof action !== 'string' || typeof callback !== 'function') {
        throw "Particle-beam is passed an illegal argument";
    }

    config.action = action;

    request.post(buildUrl(config), data, callback);
  }
};
