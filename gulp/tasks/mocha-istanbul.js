'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var sources = require('../config/sources');
var options = require('../config/options');

module.exports = function (callback) {
  gulp.src(sources.module)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(sources.test)
        .pipe(mocha(options.mocha))
        .pipe(istanbul.writeReports(options.istanbul))
        .on('end', callback);
    });
};
