'use strict';

var particleApi = 'https://api.particle.io/v1/devices/';

module.exports = function (obj) {
  return `${particleApi}${obj.device}/${obj.action}?access_token=${obj.token}`;
};
