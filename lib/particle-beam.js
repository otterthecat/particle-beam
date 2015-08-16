'use strict';

var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = function(config){

  return function(action, data, callback){

    if (!action || typeof action !== 'string') {
      callback({
        "error": "Invalid action passed to particle beam."
      });
      return;
    }

    config.action = action;

    if(typeof data === 'function'){
      callback = data;
      data = {};
    }

    callback = callback || function(){};
    data = data || {};

    request.post(buildUrl(config), data, callback);
  }
};
