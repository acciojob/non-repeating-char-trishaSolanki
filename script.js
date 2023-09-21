function firstNonRepeatedChar(str) {
 // Write your code here
	 // Create an empty object to store character counts
  const charCount = {};

  // Iterate through the string and count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // No non-repeated character found
}
// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 



