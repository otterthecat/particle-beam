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
var Beam = require('../../lib/particle-beam');
var stub = {
  "device": '1234',
  "token": '5678'
};

describe('particle-beam', function () {
  it('should be a function', function () {
    Beam.should.be.a('function');
  });

  describe('when called', function () {
    var beam = Beam(stub);

    it('should return a function', function () {
      beam.should.be.a('function');
    });
  });
});
