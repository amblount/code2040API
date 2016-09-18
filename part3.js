// Alivia Blount
// Needle in a haystack
// We’re going to send you a dictionary with two values and keys.
//The first value, needle, is a string.
//The second value, haystack, is an array of strings.
//You’re going to tell the API where the needle is in the array.
<!--
// res was {
//   "needle":"biyefqzc",
//   "haystack":
//     [
//       "udkfvbys",
//       "xrdhclbg",
//       "lyfavdpe",
//       "gitjuxhs",
//       "hizbkvto",
//       "aejcfubt",
//       "vaysjnho",
//       "zgdcelxq",
//       "nbzmrsjq",
//       "elmpciyk",
//       "zhnoiydc",
//       "nkxvferd",
//       "lrgkcwtq",
//       "ctqswdab",
//       "drbmiwoq",
//       "dkcytoqz",
//       "ugiytxaj",
//       "biyefqzc",
//       "vwgbdnsq",
//       "dybceznf"
//     ]
//   };
-->

var request = require('request');
var baseurl = "http://challenge.code2040.org/api/haystack";
var token = "917cf8410513d1256d5c3024403ae85d";
var index;
var haystack;
var needle;
var obj;


function findIndexOfNeedle(obj){
  // body data from first call was a string need to parse to JSON
  obj = JSON.parse(obj)
  needle = obj["needle"];
  haystack = obj["haystack"];
  console.log(haystack);
  for(var i = 0; i < haystack.length; i++){
    if(haystack[i] == needle){
      console.log(i)
      return i;
    }
  }
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
  secondReq.form.needle = findIndexOfNeedle(obj)
  request.post(secondReq, function(err, res, body){
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log("res 2 was", body);
  })
}

request.post(firstReq, success)
