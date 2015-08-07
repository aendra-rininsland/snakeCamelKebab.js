# snakeCamelKebab.js

Simple library for converting between cases.

## Usage:

```javascript
var snakeCamelKebab = require('snakecamelkebab');

var testString = 'this_is_a_string'; // snake_case
var camelCase = snakeCamelKebab.toCamel(testString); // returns: "thisIsAString"
var kebabCase = snakeCamelKebab.toKebab(testString); // returns: "this-is-a-string"
var snake_case = snakeCamelKebab.toSnake(kebabCase); // return: "this_is_a_string"
var testStringCase = snakeCamelKebab.detectCase(testString); // returns: "snake"
```
