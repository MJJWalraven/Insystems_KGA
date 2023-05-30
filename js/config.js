// CDN configuration for lading base JET libraries and resources
function _getCDNPath(paths) {
  var cdnPath = "https://static.oracle.com/cdn/jet/";
  var ojPath = "12.1.0/default/js/";
  var thirdpartyPath = "12.1.0/3rdparty/";
  var keys = Object.keys(paths);
  var newPaths = {};

  function _isoj(key) {
    return (key.indexOf('oj') === 0 && key !== 'ojdnd');
  }
  keys.forEach(function(key) {
    if(paths[key].indexOf("http")==0) {
        newPaths[key] = paths[key];
    }
    else {
        newPaths[key] = cdnPath + (_isoj(key) ? ojPath : thirdpartyPath) + paths[key];
    }
  });
  return newPaths;
}
function requirejsConfig() {
requirejs.config({
  baseUrl: "../js",
  paths: _getCDNPath({
    'knockout': 'knockout/knockout-3.5.1',
    'preact': 'preact/dist/preact.umd',
    'preact/hooks':'preact/hooks/dist/hooks.umd',
    'preact/compat': 'preact/compat/dist/compat.umd',
    'jquery': 'jquery/jquery-3.6.0.min',
    'jqueryui-amd': 'jquery/jqueryui-amd-1.13.0.min',
    'ojs': 'min',
    'ojL10n': 'ojL10n',
    'ojtranslations': 'resources',
    'signals': 'js-signals/signals.min',
    'text': 'require/text',
    'hammerjs': 'hammer/hammer-2.0.8.min',
    'ojdnd': 'dnd-polyfill/dnd-polyfill-1.0.2.min',
    'touchr': 'touchr/touchr',
    'WebApp':'https://cdn.jsdelivr.net/gh/MJJWalraven/Insystems_KGA@r3/js/WebApp',
    'Midlance':'https://cdn.jsdelivr.net/gh/MJJWalraven/Insystems_KGA@r3/js/midlance'
  })
});
}
module = {};
