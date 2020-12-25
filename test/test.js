/* eslint-disable */
let amrToMp3 = require('../build/app');
amrToMp3('src/amr/test.amr')
    .then(data => {
        console.log(data);  // ./src/mp3/test.mp3
        //...业务代码
    })
    .catch(err => {
        console.log(err);
    });

// test path have span
amrToMp3('src/amr/abcdef 1544497148360.1526463056869.amr')
    .then(data => {
        console.log(data);  // ./src/mp3/test.mp3
        //...业务代码
    })
    .catch(err => {
        console.log(err);
    });