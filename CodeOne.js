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

// The check of the greatest 

const findMax = (num1, num2, num3) => {
    if (num1 === num2 && num2 === num3) {
        return "All numbers are the same.";
    } else {
        return Math.max(num1, num2, num3);
    }
};

// Test the function
console.log(findMax(10, 20, 30)); // Output: 30
console.log(findMax(25, 25, 25)); // Output: All numbers are the same.
console.log(findMax(50, 40, 60)); // Output: 60

console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No lemon, no melon")); // true
