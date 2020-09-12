// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Examples:

// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"

function getMiddle(s) {
  let length = s.length / 2;
  if (s.length % 2 === 0) {
    return s.substring(length - 1, length + 1);
  } else if (s.length % 2 !== 0) {
    return s.substring(Math.round(length), Math.round(length) - 1);
  }
}

console.log(getMiddle("testing"));
console.log(getMiddle("test"));
