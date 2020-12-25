# amrToMp3
amr to mp3 nodeJS module

amr音频转mp3模块

<p>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/npm/v/amrToMp3.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/npm/l/amrToMp3.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/david/dev/binaryify/amrToMp3.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/amrToMp3"><img src="https://img.shields.io/david/binaryify/amrToMp3.svg" alt="devDependencies" ></a>
<a href="https://travis-ci.org/Binaryify/amrToMp3"><img src="https://api.travis-ci.org/Binaryify/amrToMp3.svg?branch=master" /></a>
</p>

## Installation
This module is installed via npm:
```
$ npm install amrToMp3
```
## api
```js
amrToMp3(sourcePath[,outputPath, outputName])  //outputPath default:./src/mp3/
```

## usage
js
```js
var amrToMp3 = require('amrToMp3')
amrToMp3('src/amr/test.amr')
  .then(function (data) {
    console.log(data)  // ./src/mp3/test.mp3
    //...业务代码
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
$ npm test
```

## build
```
$ npm run build
```
