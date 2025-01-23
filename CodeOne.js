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


//Find the Longest Word in a Sentence

function findLongestWord(sentence) {
    // Step 1: Remove any non-alphanumeric characters except spaces
    const cleanedSentence = sentence.replace(/[^a-zA-Z\s]/g, '');
    
    // Step 2: Split the sentence into words
    const words = cleanedSentence.split(' ');
    
    // Step 3: Find the longest word
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

// Test Cases
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("I love JavaScript programming!")); // Output: "programming"
console.log(findLongestWord("123 4567 eight9ten!!!")); // Output: "eight9ten"
console.log(findLongestWord("Hello, world!")); // Output: "Hello"


// Write a function to calculate the sum of all prime numbers up to a given number n.

function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Not prime if divisible by i
  }
  return true;
}

function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i; // Add to sum if the number is prime
    }
  }
  return sum;
}

// Testing the function
console.log(sumOfPrimes(10)); // Output: 17
console.log(sumOfPrimes(20)); // Output: 77
console.log(sumOfPrimes(50)); // Output: 328

// finding out missing numbers

function findMissingNumber(arr) {
    // Step 1: Find the expected total sum of numbers from 1 to n
    const n = arr.length + 1; // The array is missing one number
    const expectedSum = (n * (n + 1)) / 2;

    // Step 2: Calculate the actual sum of the array
    const actualSum = arr.reduce((acc, num) => acc + num, 0);

    // Step 3: The missing number is the difference
    return expectedSum - actualSum;
}

// Example Test Cases
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([7, 8, 9, 10, 12])); // Output: 11
console.log(findMissingNumber([2, 3, 4, 5, 6])); // Output: 1
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3

// Flatten a Nested Array 

function flattenArray(arr) {
  let result = [];
  
  for (let element of arr) {
    if (Array.isArray(element)) {
      // Recursively flatten the nested array
      result = result.concat(flattenArray(element));
    } else {
      result.push(element); // Add non-array elements to the result
    }
  }
  
  return result;
}

// Test cases
console.log(flattenArray([1, [2, [3, [4, [5]]]], 6])); // Expected output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3]], 4, [5]]));       // Expected output: [1, 2, 3, 4, 5]
console.log(flattenArray([]));                          // Expected output: []
console.log(flattenArray([1, "a", [true, [null]]]));    // Expected output: [1, "a", true, null]
