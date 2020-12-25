const exec = require('child_process').exec;
const path = require('path');
const ffmpegPath = require('ffmpeg-static');

function amrToMp3(filepath, outputDir = './src/mp3', outputName) {
    return new Promise((resolve, reject) => {
        const { ext, name: filename } = path.parse(filepath);
        // http://xmqvip.oss-cn-hangzhou.aliyuncs.com/other/images/2018/12/11/1544497148360.1526463056869.amr
        if (ext.toLocaleLowerCase() != '.amr') {
            console.log('please input a amr file');
            reject(new Error('please input a amr file'));
            return;
        }
        const _outputName = outputName || filename;
        const cmdStr = `${ffmpegPath} -y -i "${path.normalize(filepath)}" -acodec libmp3lame -ar 24000 -vol 500 -ab 128 "${path.join(outputDir, _outputName + '.mp3')}"`;
        exec(cmdStr, (err, stdout, stderr) => {
            if (err) {
                // console.log('error:' + stderr);
                reject(new Error('error:' + stderr));
            } else {
                resolve(`${outputDir}/${_outputName}.mp3`);
                // console.log(`transform to mp3 success!  ${path.normalize(filepath)}->${path.join(outputDir, _outputName + '.mp3')}`);
            }
        });
    });
}

module.exports = amrToMp3;
