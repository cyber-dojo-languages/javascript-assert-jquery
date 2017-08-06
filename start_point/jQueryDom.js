'use strict';

module.exports = jQueryDOM;

function jQueryDOM(filename) {
  const fs = require('fs');
  const markUp = fs.readFileSync(filename);
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM(markUp.toString());
  return require('jquery')(dom.window);
}
