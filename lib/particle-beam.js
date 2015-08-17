var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = function (action, data, callback) {
  'use strict';

  var args = Array.prototype.slice.call(arguments);
  this.action = args.shift();
  callback = args.pop();
  data = typeof args[0] !== 'undefined' ? data : {};

  if (typeof this.action !== 'string' || typeof callback !== 'function') {
    throw new Error('Particle-beam has been passed illegal argument(s)');
  }

  request.post({
    'url': buildUrl(this),
    'form': data
  }, callback);
};
