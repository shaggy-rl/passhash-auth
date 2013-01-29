passhash-auth
=============

Module to be used to read in hashed passwords generate by `passhash`. This can be used as a replacement for htpasswd for web apps or easy authentication for standalone apps.  

Usage
-----

    var passhashauth = require('passhash-auth')

Functions
---------

###loadAuthFile(file_name)

The file should contain lines using the default output format of `passhash`. For reference:
    
    {username}:{salt}:{hash}:{iterations}

###isUser(user_name)

Checks if a given `user_name` is valid. Returns a boolean.

###checkHashMatch(user_name, password)

Checks if the given `user_name` and `password` are valid. Returns a boolean. 

Example
-------

For this example we will assume the user name and password were obtained from a secure source such as a SSL socket. Due to the `checkHashMatch` function returning a boolean, you can have it execute anything you want depending on the return value. For our example it will print to stdout either `match` or `nonmatch`.

    var passhashauth = require('passhash-auth');

    passhashauth.loadAuthFile(__dirname + '/test_auth');

    var user1 = 'test',
        pass1 = 'correctPassword',

    if (passhashauth.checkHashMatch(user1, pass1)) {
        console.log('match');
    }else{
        console.log('nonmatch');
    }

This outputs:
    
    match

License
-------

MIT
