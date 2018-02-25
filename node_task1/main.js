const prettyDate = require('./getDate');
const path = require('path');
const filename = path.basename(__filename);

console.log( prettyDate() );
console.log(filename);
