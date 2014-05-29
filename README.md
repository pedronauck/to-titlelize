toTitlelize()
============

[![Travis](http://img.shields.io/travis/pedronauck/to-titlelize/master.svg)](https://travis-ci.org/pedronauck/to-titlelize)

This is a simple NodeJS module to format any string in a titlelize. Is very similar of a lot other modules, but have a little difference, you can passing a character to replace while the string is formatting.

## Usage

```bash
npm install --save to-titlelize
```

Then, simply require the plugin in your code:

```js
var toTitlelize = require('to-titlelize');

toTitlelize('hello world'); // Hello World
```

As I told, you can pass a option to replace a char while the formating is happening. To do that is very easy, simply put a object with a single property `replaceChar` as second param in the function.

```js
var toTitlelize = require('to-titlelize');

toTitlelize('hello-world-motherfucker', {
  replaceChar: '-'
}); // Hello World Motherfucker
```

**NOTICE**: `replaceChar` is default property, don't try to pass other property that the function won't work, ok?
