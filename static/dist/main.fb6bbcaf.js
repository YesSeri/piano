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
})({"assets/audio/6.c4.ogg":[function(require,module,exports) {
module.exports = "/6.c4.fdcc095b.ogg";
},{}],"assets/audio/9.ds4.ogg":[function(require,module,exports) {
module.exports = "/9.ds4.ce883204.ogg";
},{}],"assets/audio/12.fs4.ogg":[function(require,module,exports) {
module.exports = "/12.fs4.c5038faf.ogg";
},{}],"assets/audio/15.a4.ogg":[function(require,module,exports) {
module.exports = "/15.a4.7051f843.ogg";
},{}],"assets/audio/18.c5.ogg":[function(require,module,exports) {
module.exports = "/18.c5.8125d238.ogg";
},{}],"assets/audio/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "c4", {
  enumerable: true,
  get: function () {
    return _c.default;
  }
});
Object.defineProperty(exports, "ds4", {
  enumerable: true,
  get: function () {
    return _ds.default;
  }
});
Object.defineProperty(exports, "fs4", {
  enumerable: true,
  get: function () {
    return _fs.default;
  }
});
Object.defineProperty(exports, "a4", {
  enumerable: true,
  get: function () {
    return _a.default;
  }
});
Object.defineProperty(exports, "c5", {
  enumerable: true,
  get: function () {
    return _c2.default;
  }
});

var _c = _interopRequireDefault(require("./6.c4.ogg"));

var _ds = _interopRequireDefault(require("./9.ds4.ogg"));

var _fs = _interopRequireDefault(require("./12.fs4.ogg"));

var _a = _interopRequireDefault(require("./15.a4.ogg"));

var _c2 = _interopRequireDefault(require("./18.c5.ogg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./6.c4.ogg":"assets/audio/6.c4.ogg","./9.ds4.ogg":"assets/audio/9.ds4.ogg","./12.fs4.ogg":"assets/audio/12.fs4.ogg","./15.a4.ogg":"assets/audio/15.a4.ogg","./18.c5.ogg":"assets/audio/18.c5.ogg"}],"js/main.js":[function(require,module,exports) {
"use strict"; // The PianoKey class contains every relevant information and thing to create a piano key and play it.
// The awesome library tone.js is imported in index.html script.

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../assets/audio/'),
    c4 = _require.c4,
    ds4 = _require.ds4,
    fs4 = _require.fs4,
    a4 = _require.a4,
    c5 = _require.c5;

var PianoKey = /*#__PURE__*/function () {
  function PianoKey(note, shortcut, rects) {
    _classCallCheck(this, PianoKey);

    this.note = note;
    this.shortcut = shortcut;
    this.rects = rects;
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
        'rects': this.rects
      }, {
        'pressed': this.pressed
      });
    }
  }, {
    key: "playNote",
    value: function playNote(sampler) {
      this.pressed = true;
      this.rects.classList.add('active');
      sampler.triggerAttack(this.note);
    }
  }, {
    key: "stopNote",
    value: function stopNote(sampler) {
      this.pressed = false;
      this.rects.classList.remove('active');
      sampler.triggerRelease(this.note);
    }
  }]);

  return PianoKey;
}();

var pianoKeys = [new PianoKey('C2', "a", document.getElementById('c2')), new PianoKey('D2', "s", document.getElementById('d2')), new PianoKey('E2', "d", document.getElementById('e2')), new PianoKey('F2', "f", document.getElementById('f2')), new PianoKey('G2', "g", document.getElementById('g2')), new PianoKey('A2', "h", document.getElementById('a2')), new PianoKey('B2', "j", document.getElementById('b2')), new PianoKey('C3', "k", document.getElementById('c3')), new PianoKey("C#2", "w", document.getElementById('cs2')), new PianoKey("D#2", "e", document.getElementById('ds2')), new PianoKey("F#2", "t", document.getElementById('fs2')), new PianoKey("G#2", "y", document.getElementById('gs2')), new PianoKey("A#2", "u", document.getElementById('as2'))];
var overlay = document.getElementById('activate-piano-overlay');
overlay.addEventListener('click', function () {
  overlay.remove();
  var script = document.createElement('script');

  script.onload = function () {
    var sampler = new Tone.Sampler({
      urls: {
        "C2": c4,
        "D#2": ds4,
        "F#2": fs4,
        "A2": a4,
        "C3": c5
      },
      release: 1,
      baseUrl: ""
    }).toDestination(); // I wait with initiating eventlisterners until everything is loaded, including the sound library ToneJS. 

    startEventListeners();

    function startEventListeners() {
      document.addEventListener('keydown', function (evt) {
        if (evt.repeat === true) return;

        var _iterator = _createForOfIteratorHelper(pianoKeys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var k = _step.value;

            if (evt.key === k.shortcut) {
              if (k.pressed) return;
              k.playNote(sampler);
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
              k.stopNote(sampler);
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
      var pianoRects = document.querySelectorAll('#piano-svg > .piano-key');

      var _iterator3 = _createForOfIteratorHelper(pianoRects),
          _step3;

      try {
        var _loop = function _loop() {
          var rects = _step3.value;
          var matchingKey = findMatchingKey(rects);
          rects.addEventListener("touchstart", function (evt) {
            if (evt.cancelable) {
              evt.preventDefault();
            }

            evt.stopPropagation();
            matchingKey.playNote(sampler);
          }); // This solution is not perfect. I can't slid my finger along the keyboard to play a lot of notes.

          rects.addEventListener("touchend", function (evt) {
            if (evt.cancelable) {
              evt.preventDefault();
            }

            evt.stopPropagation();
            matchingKey.stopNote(sampler);
          });
          rects.addEventListener('mousedown', function (evt) {
            matchingKey.playNote(sampler);
            lastClicked = matchingKey;
          });
          rects.addEventListener('mouseup', function (evt) {
            if (lastClicked !== null) {
              lastClicked.stopNote(sampler);
            }
          });
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        } // I only want to show a fullscreen button if the user is using a mobile device. There is no need for it on a computer.

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var fsBtn = document.createElement("BUTTON");

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var innerContainer = document.getElementById('inner-container');
        fsBtn.innerText = "Fullscreen";
        innerContainer.appendChild(fsBtn);
        console.log("Fullscreen button added, because you are using a mobile device.");
      } else {
        console.log("Fullscreen has not been added, because you are not using a mobile device.");
      } // Requests fullscreen when clicked. Several versions for compatibilit reasons. 


      fsBtn.addEventListener('click', function () {
        var pianoContainer = document.getElementById('piano-container');

        if (pianoContainer.requestFullscreen) {
          pianoContainer.requestFullscreen();
        } else if (pianoContainer.webkitRequestFullscreen) {
          /* Safari */
          pianoContainer.webkitRequestFullscreen();
        } else if (pianoContainer.msRequestFullscreen) {
          /* IE11 */
          pianoContainer.msRequestFullscreen();
        }
      }); // Runs when entering or exiting fullscreen

      document.addEventListener('fullscreenchange', function () {
        var _document$getElementB = document.getElementById('piano-svg'),
            classList = _document$getElementB.classList;

        classList.contains('fs-screen-piano') ? classList.remove('fs-screen-piano') : classList.add('fs-screen-piano');
      }, false);
    } // Helper function used when adding eventlisteners.


    function findMatchingKey(rects) {
      var _iterator4 = _createForOfIteratorHelper(pianoKeys),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var key = _step4.value;

          if (rects.dataset.note === key.note) {
            return key;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    var kbBtn = document.getElementById('keybindings-btn');
    var kbDiv = document.getElementById('keybindings-div'); // This toggles the visibility of the keybindings.

    kbBtn.addEventListener('click', function () {
      kbBtn.classList.toggle('clicked');
      kbDiv.classList.toggle('hidden');
    });
  };

  script.src = "https://unpkg.com/tone@14.7.77/build/Tone.js";
  document.body.appendChild(script);
});
},{"../assets/audio/":"assets/audio/index.js"}],"../../../../Users/Henrik Stationary/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52140" + '/');

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