// Alivia Blount

var request = require('request');
var baseurl = "http://challenge.code2040.org/api/prefix";
var token = "917cf8410513d1256d5c3024403ae85d";
var nonPrefixStrings = [];
var prefix, array, length;


function findNonPrefixStrings(obj){
  // body data from first call was a string need to parse to JSON
  obj = JSON.parse(obj)
  prefix = obj["prefix"];
  array = obj["array"];
  length = prefix.lenth;
  console.log(prefix);
  for(var i = 0; i < array.length; i++){
    temp = array[i].substring(0, length);
    if(temp != prefix){
      nonPrefixStrings.push(array[1]);
    }
  }
  return result
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
  secondReq.form.needle = nonPrefixStrings(obj)
  request.post(secondReq, function(err, res, body){
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log("res 2 was", body);
  })
}

request.post(firstReq, success)
