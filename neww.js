var retext = require('retext');
var spell = require('retext-spell');
var dictionary = require('dictionary-en-gb');
var report = require('vfile-reporter');
 
retext()
  .use(spell, dictionary)
  .process('Some useles mispelt documeant.', function (err, file) {
    console.error(report(err || file));
  });
