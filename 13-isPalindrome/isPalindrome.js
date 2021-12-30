function isPalindrome(word) {
  
  for(var i = 0; i < word.length /2; i++){
    if(word[i] === word[word.length - i - 1]){
      return true;
    }
    else return false;
  }
  
}

// Do not edit this line;
module.exports = isPalindrome;