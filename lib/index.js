// Lib
// ===
//
// Contains various helper methods.
//
// Adding a new lib:
// -------------------
//
// This code will ensure that this index stays up-to-date. If you want to
// add a new lib, all you have to do is add a file with a .js extension.

module.exports = (function () {
  "use strict";

  var _    = require('underscore');
  var fs   = require('fs');
  var path = require('path');

  var exports = {};

  var libs = _.without(fs.readdirSync(__dirname), 'index.js');

  _.map(libs, function (file) {
    var lib = path.basename(file, path.extname(file));
    exports[lib] = require('./' + lib)(env, service);
  });
  return exports;
});
