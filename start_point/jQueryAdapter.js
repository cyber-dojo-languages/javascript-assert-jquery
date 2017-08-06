'use strict';

const fs = require('fs');
const { JSDOM } = require('jsdom');
const jquery = require('jquery');

const jQueryAdapter = {
  dom:function(html) {
    const dom = new JSDOM(html);
    return jquery(dom.window);
  },
  file:function(filename) {
    const markUp = fs.readFileSync(filename);
    return jQueryAdapter.dom(markUp.toString());
  }
};

module.exports = jQueryAdapter;
