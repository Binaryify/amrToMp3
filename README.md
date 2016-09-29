# amrToMp3
微信amr音频转mp3模块

## Installation
This module is installed via npm:
```
$ npm install ffmpeg-static
```

## usage
js
```js
const amrToMp3 = require('../app')
amrToMp3('src/amr/1.amr')
  .then(function () {
    // console.log('success!') //业务代码
  })
  .catch(function (err) {
    console.log(err)
  })
```

## support
* 64 bit Mac OSX
* 64 bit Linux
* 32 bit Linux
* 64 bit Windows
* 32 bit Windows

## test
```
npm test
```

## build
```
npm run build
```



