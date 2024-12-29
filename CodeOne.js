//reversitng a string

function reversOne(str){
    return str.split('').reverse().join('');
}
const word="javascript";
const output= reversOne(word);
console.log(output);


// A palindrome function is a function used to determine whether a given string (or number) reads the same backward as forward. For example,
the words "madam" and "racecar" are palindromes because they spell the same when reversed.
    
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the cleaned string
    let reversedStr = cleanStr.split("").reverse().join("");
    
    // Check if the original cleaned string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No lemon, no melon")); // true
