// Alivia Blount
var request = require('request');
var baseurl = "http://challenge.code2040.org/api/prefix";
var token = "917cf8410513d1256d5c3024403ae85d";
var nonPrefixStrings = [];
var prefix, array, length;
var answer;
// get back a string from the success
// need to parse it into json
function success(err, res, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  secondReq.array = parseObj(body);
  secondReq.form.array = parseObj(body);
  setTimeout(function() {
    request.post(secondReq, function(err, res, body){
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log(secondReq.array);
      console.log(secondReq.form.array);
    });
  }, 1000);
}

function secondRequestCall(err, res, body) {
  if (err) {
    console.log('err with second req call:', err);
    return err;
  }
}
// method to parse object
function parseObj(obj){
  obj = JSON.parse(obj);
  prefix = obj["prefix"];
  array = obj["array"];
  length = prefix.length;
  nonPrefixStrings = array.filter(function(word) {
    return prefix !== word.substring(0, length);
  });
  answer = nonPrefixStrings;
  return nonPrefixStrings;
}
var firstReq = {
  url: baseurl,
  token: token,
  form: {
    token: token
  }
};
var secondReq = {
  url: baseurl + "/validate",
  // array: answer,
  token: token,
  array: answer,
  form: {
    token: token,
    array: answer
  }
};
request.post(firstReq, success);
