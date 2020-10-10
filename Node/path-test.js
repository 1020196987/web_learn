const { rejects } = require('assert');
const path = require('path');
console.log(path.join(__dirname, 'aaa.js'))
console.log('---')
console.log(path.resolve(__dirname))
console.log(__dirname)

let ajax = function() {
    console.log(1);
    return new Promise((resolve, reject) => {
        console.log(2);
        setTimeout(() => {
            console.log(4)
        }, 1000);
    })
    console.log('3')
}
ajax()