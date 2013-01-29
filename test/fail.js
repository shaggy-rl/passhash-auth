var hpa = require('../'),
    assert = require('assert');

hpa.loadAuthFile(__dirname + '/test_auth');

assert.strictEqual(hpa.checkHashMatch('test', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(hpa.checkHashMatch('test2', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(hpa.checkHashMatch('test3', 'badpassword'), false, 'ERROR: nonmatch');
