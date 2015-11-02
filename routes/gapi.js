/**
 * Created by bhanu on 30/10/15.
 */
var express = require('express');
var router = express.Router();
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var readline = require('readline');

var oauth2Client = new OAuth2('1044346089327-gi3f8c64g3tv8m3q9vrbrienombmqrv6.apps.googleusercontent.com', 'YBUSsjxStI3H26LzazTp1jHL', 'http://localhost:3000/oauth2callback');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

router.get('/', function(req, res, next) {


    // generate consent page url
    console.log('here');
    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline', // will return a refresh token
        scope: 'https://www.googleapis.com/auth/plus.me' // can be a space-delimited string or an array of scopes
    });
    console.log('Visit the url: ', url);
    res.redirect(url);

});
// retrieve an access token
/*
getAccessToken(oauth2Client, function() {
    // retrieve user profile
    plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
        if (err) {
            console.log('An error occured', err);
            return;
        }
        console.log(profile.displayName, ':', profile.tagline);
    });
});*/

module.exports = router;