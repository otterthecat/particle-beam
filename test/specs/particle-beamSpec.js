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
var beam = require('../../lib/particle-beam');
var stubConfig = {
  'device': '1234',
  'token': '5678'
};

describe('particle-beam', function () {
  it('should return a function', function () {
    beam(stubConfig).should.be.a('function');
  });

  describe('when called', function () {
    it('should throw an error if no arguments are passed', function () {
      var b = beam(stubConfig);
      beam().should.throw(Error);
    });
  });
});
