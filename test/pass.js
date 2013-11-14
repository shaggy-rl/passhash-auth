var PasshashAuth = require('../');
var assert = require('assert');

var auth = new PasshashAuth(__dirname + '/test_auth');

assert.strictEqual(auth.checkHashMatch('test', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(auth.checkHashMatch('test2', 'test'), true, 'ERROR: nonmatch');
assert.strictEqual(auth.checkHashMatch('test3', 'test'), true, 'ERROR: nonmatch');
