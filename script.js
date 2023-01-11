// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Variable Declaration 
var confirmLength = "";
var confirmNumericCharacters;
var confirmSpecialCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;

// Function to prompt user for password options
function getPasswordOptions() {
 // Prompt user about length of the password
  var length = (prompt("Choose the length of your password between 10 and 64."));
  // while the user input is not a number or < 10 or > 64, we prompt them again about the length of the password
  while(confirmLength <= 10 || confirmLength >= 64) {
    alert("Password length must be between 10 and 64 characters. Try again."); 
    var length = (prompt("Choose the length of your password between 10 and 64."));
  }
    // Comfirm the amount of characters the user will have.
   alert('Your password will have $ {confirmLength} characters.');
  
   // Determining the parameters of password 
    var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacters = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCasedCharacters = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCasedCharacters = confirm("Click OK to confirm if you would like to include uppercase characters");
  // Loop is the answer is outside the parameter. 
    while(confirmUpperCasedCharacters === false && confirmLowerCasedCharacters === false && confirmSpecialCharacters === false && confirmNumericCharacters === false) {
      alert("You must choose at least one parameter");
  // return password options as an object
  return {
    length: length,
    isLowercaseIncluded: isLowercaseIncluded,
    isUppercaseIncluded: isUppercaseIncluded,
    isNumberIncluded: isNumberIncluded,
    isSpecialCharacterIncluded: isSpecialCharacterIncluded,
    };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var pickChoice = ""

  for (var i = 0; i < enter; i++) {
    pickChoices += arr[Math.floor(Math.random() * arr.length)];
  }
  return (pickChoices)
}

// Function to generate password with user input
function generatePassword() {
var passwordOptions = getPasswordOptions();

var possibleCharacters = [];
var password = "";
// If lowercase included then add lowerCasedCharacters array to possibleCharacters array => possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)


// If uppercase included then add upperCasedCharacters array to possibleCharacters array

// If numeric included then add numericCharacters array to possibleCharacters array

// If special characters included then add specialCharacters array to possibleCharacters array

// possibleCharacters = ['a', 'A', 1, '!', ... 'z', 'Z'] => example

var password = '';

// either wrap this for loop and the check in a while loop or
// wrap the check and the 4 ifs statements below in a while loop
for (var i = 0; i < passwordOptions.length; i++) {
    // choose 1 random element from possibleCharacters array say randomCharacter variable, use getRandom function
    password = password + getRandom(possibleCharacters)
}

// Check if password satisfy isLowercaseIncluded, isUppercaseIncluded, isNumberIncluded, isSpecialCharsIncluded requirements
if (isLowercaseIncluded) {
    // check if password variable have element from lowerCasedCharacters array
    // if not then
    // option 1. regenerate random password and do this check again
    // option 2. get random character from lowerCasedCharacters then put that character in a random position of the string
}

if (isUppercaseIncluded) {
    // check if password variable have element from upperCasedCharacters array

    // if not then
    // option 1. regenerate random password and do this check again
    // option 2. get random character from upperCasedCharacters then put that character in a random position of the string
}

if (isNumberIncluded) {
    // check if password variable have element from numericCharacters array

    // if not then
    // option 1. regenerate random password and do this check again
    // option 2. get random character from numericCharacters then put that character in a random position of the string
}

if (isSpecialCharsIncluded) {
    // check if password variable have element from specialCharacters array

    // if not then
    // option 1. regenerate random password and do this check again
    // option 2. get random character from specialCharacters then put that character in a random position of the string
}

return password;
}

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

