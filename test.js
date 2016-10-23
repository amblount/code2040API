function longestPrefix (array) {
  var words = array.sort()
  console.log(words)
  console.log(words.slice(0, -1))
  return words;
}

var stuff = ["alivia", "alray", "alpan", "alwqa"]
longestPrefix(stuff);
