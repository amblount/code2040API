function getString(){
  var server = python -m SimpleHTTPServer 8000
  var sendToken = {
    'token': "917cf8410513d1256d5c3024403ae85d"
  };
  var url = "http://challenge.code2040.org/api/reverse";
  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form")
}
