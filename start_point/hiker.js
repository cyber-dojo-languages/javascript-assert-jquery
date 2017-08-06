'use strict';

module.exports = answer;

const jQueryDOM = require('./jQueryDom.js');
const $ = jQueryDOM('hiker.html');

function answer() {
  return $('answer').text();
}
