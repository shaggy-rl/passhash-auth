var hpa = require('../');

hpa.loadAuthFile(__dirname + '/test_auth');

console.log('This is should throw an error');

hpa.checkHashMatch('test2', 'badpassword', function(result) {
  (result == true) ? consol.log('match') : console.error('ERROR');
  });
  
