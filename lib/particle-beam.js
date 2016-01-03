'use strict';
let request = require('request');
let buildUrl = require('./helpers/build-url');

module.exports = function (config) {
  return function (action, data, callback) {
    let args = Array.prototype.slice.call(arguments);
    callback = args.pop();
    config.action = args.shift();
    data = args[0] ? {'data': args[0]} : {};
    if (typeof config.action !== 'string' || typeof callback !== 'function') {
      throw new Error('particle-beam has been passed invalid arguments');
    }

    request.post({
      'url': buildUrl(config),
      'form': data
    }, callback);
  };
};
