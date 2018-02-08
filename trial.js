var fs = require('fs');
var file = 'test.doc';

fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;

  var wordsArray = splitByWords(data);

  console.log(wordsArray);
var wrdc = wordsArray.length;
console.log(wrdc);

var tatAr = spellcheck (wordsArray)
console.log("Success!!")
  });

function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
  

}

function spellcheck (wordsArray){
	const spell = require('spell-checker-js')
	spell.load('en')
	var i
	for(i=0;i<wordsArray.length;i++)
	{
		var check = spell.check(wordsArray[i])
		if (check != false) {console.log(wordsArray[i])}
		
	}
	
	return 0;
}

 
// Load dictionary

 
// Checking text

 


