/**
 * Created by bhanu on 28/10/15.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
//var file = JSON.parse(fs.readFile('http://api.indeed.com/ads/apisearch?publisher=3818743618433097&format=json&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2','utf8'));

var indeed;
//var thisurl = 'http://api.indeed.com/ads/apisearch?publisher=3818743618433097&format=json&q=ui,android,ios,bigdata,mobile,cloud&l=&sort=&radius=&st=&jt=&start='+ req.query.str +'&limit=24&fromage=&filter=&latlong=1&co=in&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.param('str'))
    request('http://api.indeed.com/ads/apisearch?publisher=3818743618433097&format=json&q=ui,android,ios,bigdata,mobile,cloud&l=&sort=&radius=&st=&jt=&start='+req.param('str')+'&limit=24&fromage=&filter=&latlong=1&co=in&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            indeed = JSON.parse(body);
          //  console.log(body) // Show the HTML for the Google homepage.
        }
    })
    res.json(indeed);
});

module.exports = router;

