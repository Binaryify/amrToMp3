const amrToMp3 = require('../build/app')
amrToMp3('src/amr/test.amr')
  .then(function () {
    // console.log('success!') //业务代码
  })
  .catch(function (err) {
    console.log(err)
  })