'use strict';

var assert = require('assert');
var testChange = "hello!";
var doT = require('../doT');

exports.test = function (templates, data, result) {
    templates.forEach(function (tmpl) {
        var fn = doT.template(tmpl);
        assert.strictEqual(fn(data), result);
    });
};
