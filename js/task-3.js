const findLongestWord = function (string) {
  let arrString = string.split(" ");
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrString.length; i += 1) {
    wordLength = arrString[1].length;

    if (arrString[i].length > wordLength) {
      longestWord = arrString[i];

      return longestWord;
    }
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
