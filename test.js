// Change './index' to 'is-null-or-empty' if you use this code outside of this package
var checkeon = require('./index');
console.log(checkeon("")); // true
console.log(checkeon(null)); // true
console.log(checkeon(undefined)); // true
console.log(checkeon("Hello World")); // false