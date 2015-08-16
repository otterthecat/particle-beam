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

    describe('returned function', function () {
      var spy = sinon.spy();
      var spy2 = sinon.spy();
      beam(3, spy);
      beam({}, {}, spy2);

      it('should take a string as first argument', function () {
        spy.should.have.been.calledOnce;
        spy2.should.have.been.calledOnce;

        spy.args[0][0].error.should.be.a('string');
        spy2.args[0][0].error.should.be.a('string');
      });
    });
  });
});
