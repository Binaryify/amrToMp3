'use strict';

var exec = require('child_process').exec;
var path = require('path');
var ffmpeg = require('ffmpeg-static');
var ffmpegPath = ffmpeg.path;
function amrToMp3(filepath) {
  var outputDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './src/mp3';

  return new Promise(function (resolve, reject) {
    var basename = path.basename(filepath);
    var filename = basename.split('.')[0];
    var etc = basename.split('.')[1];
    if (etc != 'amr') {
      console.log('please input a amr file');
      return;
    }
    var cmdStr = ffmpegPath + ' -y -i ' + filepath + ' ' + outputDir + '/' + filename + '.mp3';
    exec(cmdStr, function (err, stdout, stderr) {
      if (err) {
        console.log('error:' + stderr);
        reject('error:' + stderr);
      } else {
        resolve();
        console.log('transform to mp3 success!  ' + filepath + '->' + outputDir + '/' + filename + '.mp3');
      }
    });
  });
}

module.exports = amrToMp3;