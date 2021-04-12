// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/audio/C2.ogg":[function(require,module,exports) {
module.exports = "/C2.5d74452c.ogg";
},{}],"assets/audio/Ds2.ogg":[function(require,module,exports) {
module.exports = "/Ds2.145aca1e.ogg";
},{}],"assets/audio/Fs2.ogg":[function(require,module,exports) {
module.exports = "/Fs2.6605a072.ogg";
},{}],"assets/audio/A2.ogg":[function(require,module,exports) {
module.exports = "/A2.b5955752.ogg";
},{}],"assets/audio/C3.ogg":[function(require,module,exports) {
module.exports = "/C3.28ac4f2a.ogg";
},{}],"js/main.js":[function(require,module,exports) {
"use strict"; // The PianoKey class contains every relevant information and thing to create a piano key and play it.

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var c2 = require('../assets/audio/C2.ogg');

var ds2 = require('../assets/audio/Ds2.ogg');

var fs2 = require('../assets/audio/Fs2.ogg');

var a2 = require('../assets/audio/A2.ogg');

var c3 = require('../assets/audio/C3.ogg');

var sampler = new Tone.Sampler({
  urls: {
    C2: c2,
    "D#2": ds2,
    "F#2": fs2,
    A2: a2,
    C3: c3
  },
  release: 1,
  baseUrl: ""
}).toDestination();

var PianoKey = /*#__PURE__*/function () {
  function PianoKey(note, shortcut, polygon) {
    _classCallCheck(this, PianoKey);

    this.note = note;
    this.shortcut = shortcut;
    this.polygon = polygon;
    this.pressed = false;
  }

  _createClass(PianoKey, [{
    key: "print",
    value: function print() {
      console.log({
        'note': this.note
      }, {
        'shortcut': this.shortcut
      }, {
        'polygon': this.polygon
      }, {
        'pressed': this.pressed
      });
    } // Clears timeout to stop the fading out, and starts the sound from the beginning with max volume.

  }, {
    key: "playNote",
    value: function playNote() {
      this.pressed = true;
      this.polygon.classList.add('active');
      sampler.triggerAttack(this.note);
    }
  }, {
    key: "stopNote",
    value: function stopNote() {
      this.pressed = false;
      this.polygon.classList.remove('active');
      sampler.triggerRelease(this.note);
    }
  }]);

  return PianoKey;
}(); // Creates two arrays which will be used to create pianoKey objects that we will use in our piano. 


var pianoKeys = [new PianoKey('C2', "a", document.querySelector('.c2')), new PianoKey('D2', "s", document.querySelector('.d2')), new PianoKey('E2', "d", document.querySelector('.e2')), new PianoKey('F2', "f", document.querySelector('.f2')), new PianoKey('G2', "g", document.querySelector('.g2')), new PianoKey('A2', "h", document.querySelector('.a2')), new PianoKey('B2', "j", document.querySelector('.b2')), new PianoKey('C3', "k", document.querySelector('.c3')), new PianoKey("C#2", "w", document.querySelector('.cs2')), new PianoKey("D#2", "e", document.querySelector('.ds2')), new PianoKey("F#2", "t", document.querySelector('.fs2')), new PianoKey("G#2", "y", document.querySelector('.gs2')), new PianoKey("A#2", "u", document.querySelector('.as2'))];
document.addEventListener('keydown', function (evt) {
  if (evt.repeat === true) return;

  var _iterator = _createForOfIteratorHelper(pianoKeys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var k = _step.value;

      if (evt.key === k.shortcut) {
        if (k.pressed) return;
        k.playNote();
        return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
document.addEventListener('keyup', function (evt) {
  var _iterator2 = _createForOfIteratorHelper(pianoKeys),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var k = _step2.value;

      if (evt.key === k.shortcut) {
        k.stopNote();
        return;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
var lastClicked = null;
var pianoPolygons = document.getElementsByClassName('piano-key');

var _iterator3 = _createForOfIteratorHelper(pianoPolygons),
    _step3;

try {
  var _loop = function _loop() {
    var polygon = _step3.value;
    var matchingKey = findMatchingKey(polygon);
    polygon.addEventListener("touchstart", function (evt) {
      if (evt.cancelable) {
        evt.preventDefault();
      }

      evt.stopPropagation();
      matchingKey.playNote();
    }); // This solution is not perfect. If I slide my finger outside the piano container the sound will stop but the 

    polygon.addEventListener("touchend", function (evt) {
      if (evt.cancelable) {
        evt.preventDefault();
      }

      evt.stopPropagation();
      matchingKey.stopNote();
    }); // polygon.addEventListener('mousedown', (evt) => {
    //     if (evt.cancelable) {
    //         evt.preventDefault();
    //     }
    //     evt.stopPropagation();
    //     matchingKey.playNote();
    //     lastClicked = matchingKey
    // })
    // polygon.addEventListener('mouseup', (evt) => {
    //     if (evt.cancelable) {
    //         evt.preventDefault();
    //     }
    //     evt.stopPropagation();
    //     if (lastClicked !== null) {
    //         lastClicked.stopNote()
    //     }
    // })
  };

  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

function findMatchingKey(polygon) {
  var _iterator4 = _createForOfIteratorHelper(pianoKeys),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var key = _step4.value;

      if (polygon.dataset.note === key.note) {
        return key;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
} // function startup() {
//     const piano = document.getElementById("canvas");
//     el.addEventListener("touchend", handleEnd, false);
//     el.addEventListener("touchcancel", handleCancel, false);
//     el.addEventListener("touchmove", handleMove, false);
// }
// document.addEventListener("DOMContentLoaded", startup);


var kbBtn = document.getElementById('keybindings-btn');
var kbDiv = document.getElementById('keybindings-div');
kbBtn.addEventListener('click', function () {
  kbBtn.classList.toggle('clicked');
  kbDiv.classList.toggle('hidden');
});
},{"../assets/audio/C2.ogg":"assets/audio/C2.ogg","../assets/audio/Ds2.ogg":"assets/audio/Ds2.ogg","../assets/audio/Fs2.ogg":"assets/audio/Fs2.ogg","../assets/audio/A2.ogg":"assets/audio/A2.ogg","../assets/audio/C3.ogg":"assets/audio/C3.ogg"}],"../../../../Users/Henrik Stationary/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61042" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/Henrik Stationary/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map