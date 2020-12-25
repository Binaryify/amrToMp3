const fs = require('fs');


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

amrToMp3('src/amr/abcdef 1544497148360.1526463056869.amr', undefined, '12345')
    .then(data => {
        if (!fs.existsSync('src/mp3/12345.mp3')) {
            throw new Error('outputName Error');
        } else {
            console.log(data);  // ./src/mp3/test.mp3
            //...业务代码
        }
    })
    .catch(err => {
        console.log(err);
    });