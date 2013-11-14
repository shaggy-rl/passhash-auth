var PasshashAuth = require('../');

var assert = require('assert');

var auth = new PasshashAuth(__dirname + '/test_auth');

assert.strictEqual(auth.checkHashMatch('test', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(auth.checkHashMatch('test2', 'badpassword'), false, 'ERROR: nonmatch');
assert.strictEqual(auth.checkHashMatch('test3', 'badpassword'), false, 'ERROR: nonmatch');
