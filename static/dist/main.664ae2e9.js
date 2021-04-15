parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aqzK":[function(require,module,exports) {
module.exports="/piano/C2.4dbb8165.ogg";
},{}],"LESa":[function(require,module,exports) {
module.exports="/piano/Ds2.adcb6091.ogg";
},{}],"VUun":[function(require,module,exports) {
module.exports="/piano/Fs2.54866775.ogg";
},{}],"schF":[function(require,module,exports) {
module.exports="/piano/A2.d22a8a22.ogg";
},{}],"eQHh":[function(require,module,exports) {
module.exports="/piano/C3.548afb84.ogg";
},{}],"d6sW":[function(require,module,exports) {
"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,s=function(){};return{s:s,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var i=require("../assets/audio/C2.ogg"),a=require("../assets/audio/Ds2.ogg"),c=require("../assets/audio/Fs2.ogg"),u=require("../assets/audio/A2.ogg"),l=require("../assets/audio/C3.ogg"),d=new Tone.Sampler({urls:{C2:i,"D#2":a,"F#2":c,A2:u,C3:l},release:1,baseUrl:""}).toDestination(),f=function(){function e(t,n,o){r(this,e),this.note=t,this.shortcut=n,this.rects=o,this.pressed=!1}return s(e,[{key:"print",value:function(){console.log({note:this.note},{shortcut:this.shortcut},{rects:this.rects},{pressed:this.pressed})}},{key:"playNote",value:function(){this.pressed=!0,this.rects.classList.add("active"),d.triggerAttack(this.note)}},{key:"stopNote",value:function(){this.pressed=!1,this.rects.classList.remove("active"),d.triggerRelease(this.note)}}]),e}(),y=[new f("C2","a",document.querySelector(".c2")),new f("D2","s",document.querySelector(".d2")),new f("E2","d",document.querySelector(".e2")),new f("F2","f",document.querySelector(".f2")),new f("G2","g",document.querySelector(".g2")),new f("A2","h",document.querySelector(".a2")),new f("B2","j",document.querySelector(".b2")),new f("C3","k",document.querySelector(".c3")),new f("C#2","w",document.querySelector(".cs2")),new f("D#2","e",document.querySelector(".ds2")),new f("F#2","t",document.querySelector(".fs2")),new f("G#2","y",document.querySelector(".gs2")),new f("A#2","u",document.querySelector(".as2"))];function m(){document.addEventListener("keydown",function(t){if(!0!==t.repeat){var n,r=e(y);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t.key===o.shortcut){if(o.pressed)return;return void o.playNote()}}}catch(s){r.e(s)}finally{r.f()}}}),document.addEventListener("keyup",function(t){var n,r=e(y);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t.key===o.shortcut)return void o.stopNote()}}catch(s){r.e(s)}finally{r.f()}});var t,n=null,r=e(document.getElementsByClassName("piano-key"));try{var o=function(){var e=t.value,r=w(e);e.addEventListener("touchstart",function(e){e.cancelable&&e.preventDefault(),e.stopPropagation(),r.playNote()}),e.addEventListener("touchend",function(e){e.cancelable&&e.preventDefault(),e.stopPropagation(),r.stopNote()}),e.addEventListener("mousedown",function(e){r.playNote(),n=r}),e.addEventListener("mouseup",function(e){null!==n&&n.stopNote()})};for(r.s();!(t=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}var s=document.createElement("BUTTON");if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var i=document.getElementById("inner-container");s.innerText="Fullscreen",i.appendChild(s),console.log("Fullscreen button added, because you are using a mobile device.")}else console.log("Fullscreen has not been added, because you are not using a mobile device.");s.addEventListener("click",function(){var e=document.getElementById("piano-container");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}),document.addEventListener("fullscreenchange",function(){var e=document.getElementById("piano-svg");e.classList.contains("fullscreen-res")?(e.classList.remove("fullscreen-res"),v=!1):(e.classList.add("fullscreen-res"),v=!0)},!1),setTimeout(function(){var e=document.getElementById("piano-container");document.getElementById("loading-div").classList.add("hidden"),e.classList.remove("piano-hidden")},300)}window.addEventListener("load",m),window.addEventListener("orientationchange",h);var v=!1;function h(){setTimeout(function(){var e=document.getElementById("fs-stylesheet"),t=screen,n=t.width,r=t.height;null!==e&&(e.innerHTML=p(n,r))},100)}function g(){var e=document.createElement("style");return e.id="fs-stylesheet",e.innerHTML=p(screen.width,screen.height),e}function p(e,t){return"\n#piano-svg.fullscreen-res {\n    max-width: none;\n    width: ".concat(e,"px;\n    height: ").concat(t,"px;\n}")}function w(t){var n,r=e(y);try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t.dataset.note===o.note)return o}}catch(s){r.e(s)}finally{r.f()}}document.body.appendChild(g());var b=document.getElementById("keybindings-btn"),E=document.getElementById("keybindings-div");b.addEventListener("click",function(){b.classList.toggle("clicked"),E.classList.toggle("hidden")});
},{"../assets/audio/C2.ogg":"aqzK","../assets/audio/Ds2.ogg":"LESa","../assets/audio/Fs2.ogg":"VUun","../assets/audio/A2.ogg":"schF","../assets/audio/C3.ogg":"eQHh"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.664ae2e9.js.map
