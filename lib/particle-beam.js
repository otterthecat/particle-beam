'use strict';
var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = function (config) {
  return function (action, data, callback) {
    if (arguments.length < 1) {
      throw new Error('No action is defined');
    }

    config.action = action;
    request.post({
      'url': buildUrl(config),
      'form': data || {}
    }, callback() || function () {});
  };
};
