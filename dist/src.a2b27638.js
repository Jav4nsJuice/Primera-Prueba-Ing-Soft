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
})({"src/App.js":[function(require,module,exports) {
// alert("Presiona OK si estas list@ para empezar con javascript");
var tarea = document.querySelector('#tarea-input');
var form = document.querySelector('#tarea-form'); // const form_edad = document.querySelector('#saludador-con-edad-form');
// const form_genero = document.querySelector('#saludador-con-genero-form');
// const edad = document.querySelector('#edad-input');
// const genero = document.querySelector('#genero-input');
// const idioma = document.querySelector('#idioma-select');
// var hoy = new Date();
// const form_tiempo = document.querySelector('#saludador-con-tiempo-form');
// var hora = hoy.getHours()
// alert(hora)
// alert(nombre.value);

form.addEventListener("submit", function (event) {
  alert("La tarea: " + tarea.value + " se ingresó correctamente.");
}); // form_edad.addEventListener("submit", (event) =>{
//     if(edad.value <= 18){
//         alert("Hola Joven/Señorita " + nombre.value);
//     }else{
//         if(edad.value <=30){
//             alert("Hola Señor/Señora " + nombre.value);
//         }
//         else{
//             alert("Hola Don/Doña " + nombre.value)
//         }
//     }    
// });
// form_genero.addEventListener("submit", (event) =>{
//     if(edad.value <= 18){
//         if(genero.value == "Masculino"){
//             alert("Hola Joven " + nombre.value);
//         }else{
//             if(genero.value == "Femenino"){
//                 alert("Hola Señorita " + nombre.value);
//             }else{
//                 alert("Genero invalido. Inserte Masculino o Femenino");
//             }
//         }
//     }else{
//         if(edad.value <=30){
//             if(genero.value == "Masculino"){
//                 alert("Hola Señor " + nombre.value);
//             }else{
//                 if(genero.value == "Femenino"){
//                     alert("Hola Señora " + nombre.value);
//                 }else{
//                     alert("Genero invalido. Inserte Masculino o Femenino");
//                 }
//             }
//         }
//         else{
//             if(genero.value == "Masculino"){
//                 alert("Hola Don " + nombre.value);
//             }else{
//                 if(genero.value == "Femenino"){
//                     alert("Hola Doña " + nombre.value);
//                 }else{
//                     alert("Genero invalido. Inserte Masculino o Femenino");
//                 }
//             }
//         }
//     }    
// });
// form_tiempo.addEventListener("submit", (event) => {
//     if(edad.value <= 21){
//         if(genero.value == "Masculino"){
//             console.log("Entro");
//             if(hora >= 5 && hora < 12){
//                 if(idioma.value == "espanol"){
//                     alert("Buenos Dias Joven " + nombre.value);
//                 }else{
//                     alert("Good morning Boy " + nombre.value);
//                 }
//             }else{
//                 if(hora >= 12 && hora < 18){
//                     if(idioma.value == "espanol"){
//                         alert("Buenas Tardes Joven " + nombre.value);
//                     }else{
//                         alert("Good afternoon Boy " + nombre.value);
//                     }
//                 }else{
//                     if(idioma.value == "espanol"){
//                         alert("Buenas Noches Joven " + nombre.value);
//                     }else{
//                         alert("Good evening Boy " + nombre.value);
//                     }
//                 }
//             }
//         }else{
//             if(genero.value == "Femenino"){
//                 if(hora>= 5 && hora < 12){
//                     if(idioma.value == "espanol"){
//                         alert("Buenos Dias Señorita " + nombre.value);
//                     }else{
//                         alert("Good morning Girl " + nombre.value);
//                     }
//                 }else{
//                     if(hora >= 12 && hora < 18){
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Tardes Señorita " + nombre.value);
//                         }else{
//                             alert("Good afternoon Girl " + nombre.value);
//                         }
//                     }else{
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Noches Señorita " + nombre.value);
//                         }else{
//                             alert("Good evening Girl " + nombre.value);
//                         }
//                     }
//                 }
//             }else{
//                 alert("Genero invalido. Inserte Masculino o Femenino");
//             }
//         }
//     }else{
//         if(edad.value <=60){
//             if(genero.value == "Masculino"){
//                 if(hora>= 5 && hora < 12){
//                     if(idioma.value == "espanol"){
//                         alert("Buenos Dias Señor " + nombre.value);
//                     }else{
//                         alert("Good morning Man " + nombre.value);
//                     }
//                 }else{
//                     if(hora >= 12 && hora < 18){
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Tardes Señor " + nombre.value);
//                         }else{
//                             alert("Good afternoon Man " + nombre.value);
//                         }
//                     }else{
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Noches Señor " + nombre.value);
//                         }else{
//                             alert("Good evening Man " + nombre.value);
//                         }
//                     }
//                 }
//             }else{
//                 if(genero.value == "Femenino"){
//                     if(hora>= 5 && hora < 12){
//                         if(idioma.value == "espanol"){
//                             alert("Buenos Dias Señora " + nombre.value);
//                         }else{
//                             alert("Good morning Woman " + nombre.value);
//                         }
//                     }else{
//                         if(hora >= 12 && hora < 18){
//                             if(idioma.value == "espanol"){
//                                 alert("Buenas Tardes Señora " + nombre.value);
//                             }else{
//                                 alert("Good afternoon Woman " + nombre.value);
//                             }
//                         }else{
//                             if(idioma.value == "espanol"){
//                                 alert("Buenas Noches Señora " + nombre.value);
//                             }else{
//                                 alert("Good evening Woman " + nombre.value);
//                             }
//                         }
//                     }
//                 }else{
//                     alert("Genero invalido. Inserte Masculino o Femenino");
//                 }
//             }
//         }
//         else{
//             if(genero.value == "Masculino"){
//                 if(hora>= 5 && hora < 12){
//                     if(idioma.value == "espanol"){
//                         alert("Buenos Dias Don " + nombre.value);
//                     }else{
//                         alert("Good morning Mr. " + nombre.value);
//                     }
//                 }else{
//                     if(hora >= 12 && hora < 18){
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Tardes Don " + nombre.value);
//                         }else{
//                             alert("Good evening Mr. " + nombre.value);
//                         }
//                     }else{
//                         if(idioma.value == "espanol"){
//                             alert("Buenas Noches Don " + nombre.value);
//                         }else{
//                             alert("Good evening Mr. " + nombre.value);
//                         }
//                     }
//                 }
//             }else{
//                 if(genero.value == "Femenino"){
//                     if(hora>= 5 && hora < 12){
//                         if(idioma.value == "espanol"){
//                             alert("Buenos Dias Doña " + nombre.value);
//                         }else{
//                             alert("Good morning Mrs. " + nombre.value);
//                         }
//                     }else{
//                         if(hora >= 12 && hora < 18){
//                             if(idioma.value == "espanol"){
//                                 alert("Buenos Tardes Doña " + nombre.value);
//                             }else{
//                                 alert("Good afternoon Mrs. " + nombre.value);
//                             }
//                         }else{
//                             if(idioma.value == "espanol"){
//                                 alert("Buenas Noches Doña " + nombre.value);
//                             }else{
//                                 alert("Good evening Mrs. " + nombre.value);
//                             }
//                         }
//                     }
//                 }else{
//                     alert("Genero invalido. Inserte Masculino o Femenino");
//                 }
//             }
//         }
//     }   
// });
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./App");
},{"./App":"src/App.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50159" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map