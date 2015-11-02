/**
 * Created by bhanu on 30/10/15.
 */
var express = require('express');
var router = express.Router();
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var plus = google.plus('v1');


var oauth2Client = new OAuth2('1044346089327-gi3f8c64g3tv8m3q9vrbrienombmqrv6.apps.googleusercontent.com', 'YBUSsjxStI3H26LzazTp1jHL', 'http://localhost:3000/oauth2callback');

router.get('/', function(req, res) {
    var code = req.query.code;
    console.log(code);
    oauth2Client.getToken(code, function(err, tokens) {
        oauth2Client.setCredentials(tokens);
        plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            console.log(profile.displayName, ':', profile.tagline);
            req.session.guser = profile.displayName;
            res.redirect('/');
            })
    })
});

module.exports = router;