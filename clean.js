var rimraf= require('rimraf');
var path = require('path');
var conf  = require('./vue.config');
var dir = conf.outputDir;
['js','img','fonts','lib','css'].forEach(item=>{
    rimraf.sync(path.join(dir,item));
})