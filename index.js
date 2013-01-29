#!/usr/bin/env node
/*
 *  passhash-auth
 *
 *  Module to be used to read in hashed passwords generate by passhash. This can be used as a replacement for htpasswd for web apps or easy authentication for standalone apps.
 *
 *  Author: Alexander Shagla-McKotch <shagla@gmail.com>
 *
 *  License: MIT
 */

// initial varibles and requires
var fs = require('fs'),
    crypto = require('crypto'),
    hash_auth = {};

module.exports.loadAuthFile = loadAuthFile;
module.exports.checkHashMatch = checkHashMatch;
module.exports.isUser = isUser;

// function to read auth file in
function loadAuthFile(file_name) {
  var path = file_name,
      lines,
      fields;
  lines = fs.readFileSync(path).toString().split('\n');

  lines.forEach(function (line) {
    if (line) {
      fields = line.split(':');
      hash_auth[fields[0]] = [fields[1], fields[2], fields[3]];
    }
  });
}

// check if user is in auth file
function isUser(username) {
  var user = username,
      s;
  (hash_auth[user]) ? s = true : s = false;
  return s;
}

// check if password given by user is valid
function checkHashMatch(username, password) {
  var user = username,
      pass = password,
      s;
  /* check if username is valid
   * if it is valid set variables
   * sha512 the digest for a number of iterations
   * check if the digest is equal to the stored hash, setting a boolean to a variable
   */
  if (isUser(user)) {
    var salt = hash_auth[user][0],
        hash = hash_auth[user][1],
        iterations = hash_auth[user][2],
        digest = pass;
    for (var i=0; i <= +iterations; i++) {
      digest = crypto.createHmac('sha512', salt).update(digest).digest('hex');
    }
    (digest === hash) ? s = true : s = false;
  }
  return s;
}

