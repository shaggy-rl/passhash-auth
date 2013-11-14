#!/usr/bin/env node
/*
 *  passhash-auth
 *
 *  Module to be used to read in hashed passwords generate by passhash. This can be used as a replacement for htpasswd for web apps or easy authentication for standalone apps.
 *
 * Author: Alexander Shagla-McKotch <shagla@gmail.com> 
 * Contributor: Dave Eddy <dave@daveeddy.com> 
 *
 *  License: MIT
 */

// initial varibles and requires
var fs = require('fs');
var crypto = require('crypto');

module.exports = passhashAuth;

function passhashAuth(s) {
  var self = this;
  self.creds = s;
  if (typeof s === 'string') {
    // parse the argument as if it is a filename
    self.creds = {};
    var lines = fs.readFileSync(s, 'utf-8').split('\n');
    lines.forEach(function(line) {
      if (!line || line[0] === '#')
        return;
      var fields = line.split(':');
      self.creds[fields[0]] = {
        salt: fields[1],
        hash: fields[2],
        iterations: fields[3]
      };
    });
  }
}

passhashAuth.prototype.isUser = function isUser(username) {
  return !!this.creds[username];
};

passhashAuth.prototype.checkHashMatch = function checkHashMatch(username, password) {
  /* check if username is valid
   * if it is valid set variables
   * sha512 the digest for a number of iterations
   * check if the digest is equal to the stored hash, setting a boolean to a variable
   */
  var creds = this.creds[username];
  if (!creds)
    return false;

  var digest = password;
  for (var i = 0; i <= creds.iterations; i++) {
    digest = crypto.createHmac('sha512', creds.salt).update(digest).digest('hex');
  }

  return digest === creds.hash;
};
