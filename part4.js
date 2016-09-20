// Alivia Blount

var request = require('request');
var baseurl = "http://challenge.code2040.org/api/prefix";
var token = "917cf8410513d1256d5c3024403ae85d";
var nonPrefixStrings = [];
var prefix, array, length;

// method to parse object
function parseObj(obj){
  obj = JSON.parse(obj)
  prefix = obj["prefix"];
  array = obj["array"];
  length = prefix.length;
  nonPrefixStrings = array.filter(function(word) {
    return prefix !== word.substring(0, length);
  });
  console.log(nonPrefixStrings)
  return nonPrefixStrings;
};

var firstReq = {
  url: baseurl,
  form: {
    token: token
  }
}

var secondReq = {
  url: baseurl + "/validate",
  form: {
    token: token
  }
}

// get back a string from the success
// need to parse it into json
function success(err, res, body) {
  if (err) {
    return console.error('upload failled:', err);
  }
  console.log("res was", body);
  obj = body;
  secondReq.form.array = parseObj(obj)
  request.post(secondReq, function(err, res, body){
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log("res 2 was", body);
  })
}

request.post(firstReq, success)
