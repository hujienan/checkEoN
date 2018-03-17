# checkeon

A Node.js package that checks whether a given string is empty or null.  

## Usage

* First, install the package using npm:  

	**npm install checkeon --save**

* Then, require it and use it like below:  
	
	var checkeon = require('./index');  
	console.log(checkeon("")); // true  
	console.log(checkeon(null)); // true  
	console.log(checkeon(undefined)); // true  
	console.log(checkeon("Hello World")); // false  

## License

	ISC  
