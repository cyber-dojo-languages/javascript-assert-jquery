'use strict';

module.exports = {
  answer
};

const jqa = require('./jQueryAdapter.js');

function answer() {
  const $ = jqa.file('hiker.html');
  return $('answer').text();
}
