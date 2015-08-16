'use strict';

var request = require('request');
var buildUrl = require('./helpers/build-url');

module.exports = {
  "device": null,
  "action": null,
  "token": null,
  "post": function(data, callback){

    if(arguments.length < 2){
      callback = data;
      data = {};
    }

    callback = callback || function(){};
    data = data || {};

    request.post(buildUrl(this), data, callback);
  }
}