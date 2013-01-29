var passhashauth = require('../'),
    assert = require('assert');

passhashauth.loadAuthFile(__dirname + '/test_auth');

assert.strictEqual(passhashauth.checkHashMatch('test', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(passhashauth.checkHashMatch('test2', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(passhashauth.checkHashMatch('test3', 'test'), true, 'ERROR: nonmatch');
