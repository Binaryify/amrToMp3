'use strict';

var exec = require('child_process').exec;
var path = require('path');
var ffmpeg = require('ffmpeg-static');
var ffmpegPath = ffmpeg.path;
function amrToMp3(filepath) {
    var outputDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './src/mp3';

    return new Promise(function (resolve, reject) {
        var _path$parse = path.parse(filepath),
            ext = _path$parse.ext,
            filename = _path$parse.name;
        // http://xmqvip.oss-cn-hangzhou.aliyuncs.com/other/images/2018/12/11/1544497148360.1526463056869.amr


        if (ext.toLocaleLowerCase() != '.amr') {
            console.log('please input a amr file');
            reject('please input a amr file');
            return;
        }
        var cmdStr = ffmpegPath + ' -y -i "' + path.normalize(filepath) + '" "' + path.join(outputDir, filename + '.mp3') + '"';
        console.log('cmdStr', cmdStr);
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                console.log('error:' + stderr);
                reject('error:' + stderr);
            } else {
                resolve(outputDir + '/' + filename + '.mp3');
                console.log('transform to mp3 success!  ' + path.normalize(filepath) + '->' + path.join(outputDir, filename + '.mp3'));
            }
        });
    });
}

module.exports = amrToMp3;