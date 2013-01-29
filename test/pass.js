var hpa = require('../'),
    assert = require('assert');

hpa.loadAuthFile(__dirname + '/test_auth');

assert.strictEqual(hpa.checkHashMatch('test', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(hpa.checkHashMatch('test2', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(hpa.checkHashMatch('test3', 'test'), true, 'ERROR: nonmatch');
