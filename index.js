function isPalindrome(word) {
  // Write your algorithm here
  //Iterate over the characters in the word
  for(let i = 0; i < word.length; i++){
    //Iterate over the characters in reverse order
    for (let j = word.length-1; j >= 0; j--){
    // Check if the characters at the current positions match
      return word[i] === word[j] ? true : false;
    }
  }
}

/* 
  Add your pseudocode here
  //looping takes place in the string
  //the last letter is matched to the first

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
