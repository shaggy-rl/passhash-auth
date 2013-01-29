var index = require('../index');


index.loadAuthFile(__dirname + '/test_auth');
index.checkHashMatch('test', 'test', function(result) {
  (result == true) ? console.log('match') : console.log('nonmatch');
  });
