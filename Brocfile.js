var Sass = require('broccoli-sass');
var Merge = require('broccoli-merge-trees');

var styles = new Sass('sass', 'app.scss', 'app.css');

module.exports = new Merge(['public', 'sass']);
