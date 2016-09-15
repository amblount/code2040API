
  var sendToken = {
    'token': "917cf8410513d1256d5c3024403ae85d"
  };


  function getStringFromCode2040() {
    var request = $.ajax({
      type: 'POST',
      url: "http://challenge.code2040.org/api/reverse?token=" + sendToken.token,
      beforeSend: function(xhr){
        xhr.setRequestHeader("token", sendToken.token)
      }
    });

    request.done(function(msg) {
      $('#string').append(msg);
    });

    var string = $('#string').html()

    function reverse(word){
      var array = word.split("");
      var reverseArray = array.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
      console.log(joinArray)
      console.log("inside")
    };
    reverse("the");
    var reversedString = reverse(string);
    console.log(reversedString)

    sendReversedString(reversedString);
  };

  function sendReversedString(reversedString){
      console.log("here");
      console.log(reversedString)
    var httpReq = $.ajax({
      type: 'POST',
      url: "http://challenge.code2040.org/api/reverse/validate?token=" + sendToken.token +"&string=" +reversedString,
      beforeSend: function(xhr){
        xhr.setRequestHeader("token", sendToken.token)
      },
      dataType: 'json',
      data: {token: sendToken.token, string: reversedString}
    });

    httpReq.done(function(msg){
        console.log("here")
        $('#response').append(msg);
    })
  }

  // getStringFromCode2040();
