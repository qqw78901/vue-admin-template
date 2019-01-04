var rimraf = require('rimraf');
var config = require('./config');
var path = require('path');
var dir = config.outputDir;
config.dirNeedToClean.forEach(item => {
  rimraf.sync(path.join(dir, item));
});
