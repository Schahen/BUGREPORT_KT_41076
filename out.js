(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'out'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'out'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'out'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'out'.");
    }root.out = factory(typeof out === 'undefined' ? {} : out, kotlin, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$kotlin_test) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function GenericTestsImpl(transform) {
  }
  GenericTestsImpl.prototype.foo = function () {
  };
  GenericTestsImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenericTestsImpl',
    interfaces: []
  };
  _.GenericTestsImpl = GenericTestsImpl;
  suite('', false, function () {
    suite('GenericTestsImpl', false, function () {
      test('foo', false, function () {
        return (new GenericTestsImpl()).foo();
      });
    });
  });
  Kotlin.defineModule('out', _);
  return _;
}));
