'use strict';

var exec = require('child_process').exec;
var path = require('path');
var ffmpegPath = require('ffmpeg-static');

function amrToMp3(filepath) {
    var outputDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './src/mp3';
    var outputName = arguments[2];

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
        var _outputName = outputName || filename;
        var cmdStr = ffmpegPath + ' -y -i "' + path.normalize(filepath) + '" -acodec libmp3lame -ar 24000 -vol 500 -ab 128 "' + path.join(outputDir, _outputName + '.mp3') + '"';
        console.log('cmdStr', cmdStr);
        exec(cmdStr, function (err, stdout, stderr) {
            if (err) {
                // console.log('error:' + stderr);
                reject('error:' + stderr);
            } else {
                resolve(outputDir + '/' + _outputName + '.mp3');
                // console.log(`transform to mp3 success!  ${path.normalize(filepath)}->${path.join(outputDir, _outputName + '.mp3')}`);
            }
        });
    });
}

module.exports = amrToMp3;