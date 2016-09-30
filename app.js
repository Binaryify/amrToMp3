const exec = require('child_process').exec
const path = require('path')
const ffmpeg = require('ffmpeg-static')
const ffmpegPath = ffmpeg.path
function amrToMp3(filepath, outputDir = './src/mp3') {
  return new Promise((resolve, reject) => {
    const basename = path.basename(filepath)
    const filename = basename.split('.')[0]
    const etc = basename.split('.')[1]
    if (etc != 'amr') {
      console.log('please input a amr file')
      return
    }
    const cmdStr = `${ffmpegPath} -y -i ${filepath} ${outputDir}/${filename}.mp3`
    exec(cmdStr, (err, stdout, stderr) => {
      if (err) {
        console.log('error:' + stderr)
        reject('error:' + stderr)
      } else {
        resolve(`${outputDir}/${filename}.mp3`)
        console.log(`transform to mp3 success!  ${filepath}->${outputDir}/${filename}.mp3`)
      }
    })
  })
}

module.exports = amrToMp3
