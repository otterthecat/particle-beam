'use strict';

// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

// modules to test
// /////////////////////////////////////////////////////////
var builder = require('../../lib/helpers/build-url');
var stub = {
  "device": '1234',
  "token": '5678',
  "action": "foo"
};

describe('build-url', function () {

  it('should be a function', function(){
    builder.should.be.a('function');
  });

  describe('when called', function () {
    var returnValue = builder(stub);

    it('should return a string', function () {
      returnValue.should.be.a('string');
    });

    it('should build correct url', function () {
      returnValue.should.contain('devices/'+ stub.device +'/' + stub.action +'?access_token='+ stub.token);
    });
  });
});
