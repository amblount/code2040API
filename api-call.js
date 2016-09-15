var request = require('request');
var baseUrl = "http://challenge.code2040.org/api/reverse";
var token = "917cf8410513d1256d5c3024403ae85d";

var firstReq = {
  url: baseUrl,
  form: {
    token: token,
    string: "hello"
  }
}

var secondReq = {
  url: baseUrl + "/validate",
  form: {
    token: token
  }
}

function success(err, res, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log("res was", body);
  secondReq.form.string = body.split("").reverse().join("");
  request.post(secondReq, function(err, res, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log("res was", body);
  });
}

request.post(firstReq, success);
