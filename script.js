
//Two words are anagrams of one another if their letters can be rearranged to form the other word.

// In this challenge, you will be given a string. You must split it into two contiguous substrings, then determine the minimum number of characters to change to make the two substrings into anagrams of one another.

// For example, given the string 'abccde', you would break it into two parts: 'abc' and 'cde'. Note that all letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.



function anagramOfAString(s) {
  let stringSlice1 = s.slice(s.length / 2);
  let stringSlice2 = s.slice(0, s.length / 2);

  let countForAnagram = 0;
  if (s.length % 2 !== 0) {
    return -1;
  }

  for (let i = 0; i < s.length / 2; i++) {
    if (stringSlice1.includes(stringSlice2[i])) {
      stringSlice1 = stringSlice1.replace(stringSlice2[i], "");
    } else {
      countForAnagram++;
    }
  }

  return countForAnagram;
}
console.log(anagramOfAString("asdfjoieufoa"));