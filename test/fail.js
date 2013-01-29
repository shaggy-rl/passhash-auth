var passhashauth = require('../'),
    assert = require('assert');

passhashauth.loadAuthFile(__dirname + '/test_auth');

assert.strictEqual(passhashauth.checkHashMatch('test', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(passhashauth.checkHashMatch('test2', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(passhashauth.checkHashMatch('test3', 'badpassword'), false, 'ERROR: nonmatch');
