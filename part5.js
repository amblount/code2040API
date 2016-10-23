// Alivia Blount
var request = require('request');
var http = require('http');
var baseurl = "http://challenge.code2040.org/api/dating";
var token = "917cf8410513d1256d5c3024403ae85d";
var iso860date, interval, newDate;

// get back a string from the success
// need to parse it into json
function success(err, res, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  secondReq.form.datestamp = parseObj(body);
  console.log("BODY",body)

    request.post(baseurl + "/validate", secondReq, function(err, res, body){
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log(res.body);
    });
}

// method to parse object
function parseObj(obj){
  // this is our first response
  obj = JSON.parse(obj);
  // the date as ISO string '2016-11-06T19:44:45Z'
  datestamp = obj["datestamp"];
  // number of seconds to add
  interval = obj["interval"];
  // convert the string to miliseconds
  var parsedObj = Date.parse(datestamp);
  // convert miliseconds to seconds
  var dateInSeconds = parsedObj / 1000
  // add given date(seconds) plus interval
  newDate = dateInSeconds + interval
  // convert back to miliseconds
  var dateInMiliSeconds = newDate * 1000
  // convert the miliseconds number into DATE obj
  var date = new Date(dateInMiliSeconds)
  // convert back to ISO string
  iso860date = date.toISOString()

  console.log(iso860date);
  return iso860date;
 }

var firstReq = {
  'token': token,
  form: {
    token: token
  }
};
var secondReq = {
  'token': token,
  form: {
    token: token,
    datestamp: iso860date
  }
};
request.post(baseurl, firstReq, success);
