var amrToMp3 = require('../build/app')
amrToMp3('src/amr/test.amr')
  .then(function (data) {
    console.log(data)  // ./src/mp3/test.mp3
    //...业务代码
  })
  .catch(function (err) {
    console.log(err)
  })