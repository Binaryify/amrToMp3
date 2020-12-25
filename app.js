const exec = require('child_process').exec;
const path = require('path');
const ffmpeg = require('ffmpeg-static');
const ffmpegPath = ffmpeg.path;
function amrToMp3(filepath, outputDir = './src/mp3') {
    return new Promise((resolve, reject) => {
        const { ext, name: filename } = path.parse(filepath);
        // http://xmqvip.oss-cn-hangzhou.aliyuncs.com/other/images/2018/12/11/1544497148360.1526463056869.amr
        if (ext.toLocaleLowerCase() != '.amr') {
            console.log('please input a amr file');
            reject('please input a amr file');
            return;
        }
        const cmdStr = `${ffmpegPath} -y -i "${path.normalize(filepath)}" "${path.join(outputDir, filename + '.mp3')}"`;
        console.log('cmdStr', cmdStr);
        exec(cmdStr, (err, stdout, stderr) => {
            if (err) {
                console.log('error:' + stderr);
                reject('error:' + stderr);
            } else {
                resolve(`${outputDir}/${filename}.mp3`);
                console.log(`transform to mp3 success!  ${path.normalize(filepath)}->${path.join(outputDir, filename + '.mp3')}`);
            }
        });
    });
}

module.exports = amrToMp3;
