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


//Write a function isAnagram that takes two strings as input and determines if they are anagrams of each other.
//Two strings are anagrams if they use the exact same characters in the same frequency but arranged differently.
//Ignore spaces and capitalization.

    // comparing two strings that are entered.
function words(str1,str2){
    const formating=(strt)=> str1.toLowerCase().replace(/\s+/g, '').split('').sort().join();

    return formating(str1)===formating(str2);
}
console.log(words("Listen", "Silent"))
console.log(words("React", "Angular"))


// Find the Most Frequent Element in an Array

function mostFrequent(arr) {
    if (arr.length === 0) return null; // Handle empty array

    const frequencyMap = {}; // To store element frequencies
    let maxCount = 0; // Track the highest frequency
    let mostFrequentElement = null; // Store the most frequent element

    // Count the frequency of each element
    for (let element of arr) {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;

        // Update the most frequent element if needed
        if (frequencyMap[element] > maxCount) {
            maxCount = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

// Test cases
console.log(mostFrequent([1, 2, 3, 1, 2, 1])); // Output: 1
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "banana"])); // Output: "banana"
console.log(mostFrequent([true, false, true, true, false])); // Output: true
console.log(mostFrequent([])); // Output: null

// phone number formating

function change(input) {
    var changeone = input.replace(/[^0-9]/g, ""); // Remove all non-numeric characters

    // Check if the cleaned string has exactly 10 digits
    if (changeone.length !== 10) { 
        return "Invalid phone number";
    } else {
        // Format the cleaned number
        let formatone1 = `(${changeone.slice(0, 3)}) ${changeone.slice(3, 6)}-${changeone.slice(6)}`;
        return formatone1;
    }
}

// Test cases
console.log(change("(123) 456-7890")); // Output: "(123) 456-7890"
console.log(change("1234567890"));     // Output: "(123) 456-7890"
console.log(change("+1 (123) 456-7890")); // Output: "(123) 456-7890"
console.log(change("123-45-678"));     // Output: "Invalid phone number"
console.log(change("12345678901"));    // Output: "Invalid phone number"

// removing duplicate number into array

function removeDuplicates(array) {
    return [...new Set(array)];
}

// Test cases
console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([])); // Output: []
console.log(removeDuplicates([42])); // Output: [42]
console.log(removeDuplicates([7, 7, 7, 7])); // Output: [7]

// reversing a string without reverse()

function reverseString(input) {
  let reversed = ""; // Initialize an empty string
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i]; // Add each character from the end
  }
  return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
