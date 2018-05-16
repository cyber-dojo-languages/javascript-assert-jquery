'use strict';

module.exports = {
  dom,
  file
};

const fs = require('fs');
const jquery = require('jquery');
const { JSDOM } = require('jsdom');

function dom(html) {
  const dom = new JSDOM(html);
  return jquery(dom.window);
}

function file(filename) {
  const markUp = fs.readFileSync(filename);
  return dom(markUp.toString());
}
