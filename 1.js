// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

const alphabet = ["a","b","c","a","d","e","e","c","f","b"]
const set = new Set();
for(i=0;i<alphabet.length;i++){
    set.add(alphabet[i])
}
console.log(set);

