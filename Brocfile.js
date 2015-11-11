var Sass = require('broccoli-sass');
var Merge = require('broccoli-merge-trees');
var Babel = require('broccoli-babel-transpiler');
var Concat = require('broccoli-concat');

var styles = new Sass(['sass'], 'app.scss', 'app.css');

var scripts = Babel('src', {
  browserPolyfill: true,
  stage: 0,
  moduleIds: true,
  modules: 'amd',

  moduleRoot: 'todo',
});

scripts = Concat(scripts, {
  inputFiles: [
    '**/*.js',
  ],
  outputFile: '/app.js',
});

module.exports = new Merge(['public', styles, scripts]);
