function frequencyCounter(word) {
  let map = {};
  for(var i = 0;i < word.length; i++){
    if(map[word.charAt(i)])
      map[word.charAt(i)]++;
    else 
      map[word.chatAt(i)] = 1;
  }
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;