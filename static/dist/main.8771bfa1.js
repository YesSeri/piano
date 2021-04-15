parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aqzK":[function(require,module,exports) {
module.exports="https://yesseri.github.io/piano/C2.4dbb8165.ogg";
},{}],"LESa":[function(require,module,exports) {
module.exports="https://yesseri.github.io/piano/Ds2.adcb6091.ogg";
},{}],"VUun":[function(require,module,exports) {
module.exports="https://yesseri.github.io/piano/Fs2.54866775.ogg";
},{}],"schF":[function(require,module,exports) {
module.exports="https://yesseri.github.io/piano/A2.d22a8a22.ogg";
},{}],"eQHh":[function(require,module,exports) {
module.exports="https://yesseri.github.io/piano/C3.548afb84.ogg";
},{}],"d6sW":[function(require,module,exports) {
"use strict";function e(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=t(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=require("../assets/audio/C2.ogg"),a=require("../assets/audio/Ds2.ogg"),u=require("../assets/audio/Fs2.ogg"),c=require("../assets/audio/A2.ogg"),l=require("../assets/audio/C3.ogg"),d=new Tone.Sampler({urls:{C2:i,"D#2":a,"F#2":u,A2:c,C3:l},release:1,baseUrl:""}).toDestination(),f=function(){function e(t,n,r){o(this,e),this.note=t,this.shortcut=n,this.rects=r,this.pressed=!1}return s(e,[{key:"print",value:function(){console.log({note:this.note},{shortcut:this.shortcut},{rects:this.rects},{pressed:this.pressed})}},{key:"playNote",value:function(){this.pressed=!0,this.rects.classList.add("active"),d.triggerAttack(this.note)}},{key:"stopNote",value:function(){this.pressed=!1,this.rects.classList.remove("active"),d.triggerRelease(this.note)}}]),e}(),m=[new f("C2","a",document.getElementById("c2")),new f("D2","s",document.getElementById("d2")),new f("E2","d",document.getElementById("e2")),new f("F2","f",document.getElementById("f2")),new f("G2","g",document.getElementById("g2")),new f("A2","h",document.getElementById("a2")),new f("B2","j",document.getElementById("b2")),new f("C3","k",document.getElementById("c3")),new f("C#2","w",document.getElementById("cs2")),new f("D#2","e",document.getElementById("ds2")),new f("F#2","t",document.getElementById("fs2")),new f("G#2","y",document.getElementById("gs2")),new f("A#2","u",document.getElementById("as2"))];function y(){document.addEventListener("keydown",function(t){if(!0!==t.repeat){var n,o=e(m);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(t.key===r.shortcut){if(r.pressed)return;return void r.playNote()}}}catch(s){o.e(s)}finally{o.f()}}}),document.addEventListener("keyup",function(t){var n,o=e(m);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(t.key===r.shortcut)return void r.stopNote()}}catch(s){o.e(s)}finally{o.f()}});var t,n=null,o=e(document.getElementsByClassName("piano-key"));try{var r=function(){var e=t.value,o=g(e);e.addEventListener("touchstart",function(e){e.cancelable&&e.preventDefault(),e.stopPropagation(),o.playNote()}),e.addEventListener("touchend",function(e){e.cancelable&&e.preventDefault(),e.stopPropagation(),o.stopNote()}),e.addEventListener("mousedown",function(e){o.playNote(),n=o}),e.addEventListener("mouseup",function(e){null!==n&&n.stopNote()})};for(o.s();!(t=o.n()).done;)r()}catch(a){o.e(a)}finally{o.f()}var s=document.createElement("BUTTON");if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var i=document.getElementById("inner-container");s.innerText="Fullscreen",i.appendChild(s),console.log("Fullscreen button added, because you are using a mobile device.")}else console.log("Fullscreen has not been added, because you are not using a mobile device.");s.addEventListener("click",function(){var e=document.getElementById("piano-container");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}),document.addEventListener("fullscreenchange",function(){var e=document.getElementById("piano-svg").classList;e.contains("fs-screen-piano")?e.remove("fs-screen-piano"):e.add("fs-screen-piano")},!1),setTimeout(function(){var e=document.getElementById("piano-container");document.getElementById("loading-div").classList.add("hidden"),e.classList.remove("piano-hidden")},300)}function g(t){var n,o=e(m);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(t.dataset.note===r.note)return r}}catch(s){o.e(s)}finally{o.f()}}window.addEventListener("load",y);var v=document.getElementById("keybindings-btn"),p=document.getElementById("keybindings-div");v.addEventListener("click",function(){v.classList.toggle("clicked"),p.classList.toggle("hidden")});
},{"../assets/audio/C2.ogg":"aqzK","../assets/audio/Ds2.ogg":"LESa","../assets/audio/Fs2.ogg":"VUun","../assets/audio/A2.ogg":"schF","../assets/audio/C3.ogg":"eQHh"}]},{},["d6sW"], null)
//# sourceMappingURL=https://yesseri.github.io/piano/main.8771bfa1.js.map