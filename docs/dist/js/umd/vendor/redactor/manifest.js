(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.manifest = mod.exports;
  }
})(this, function (exports) {
  "use strict";
});

//= require ./redactor
//= require ./redactor-langs
//= require_tree ./plugins
