var fs = require('fs');
var path = require('path');
const glob= require("glob");
const webfontsGenerator = require('webfonts-generator');
var filesList = [];

const output_dir = 'out';
const icon_glob = 'svg' + '/**/*.svg';

if (!fs.existsSync(output_dir)) {
  fs.mkdirSync(output_dir);
}

glob("svg/**/*.svg", function (er, files) {
  filesList = files;
})

setTimeout( function(){ convertToWF() }, 1000 );
function convertToWF() {
  webfontsGenerator({
  files: filesList,
  fontName: 'zi-font',
  dest: 'out/',
  html: true
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
})
}
 