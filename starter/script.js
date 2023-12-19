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


// Function to prompt user for password options
function getPasswordOptions() {
  
  let passNum = parseInt(prompt("How many characters do you want in your password?", "Must be atleast 8 characters but no more than 128."))

  while (isNaN(passNum) || passNum < 8 || passNum > 128) {
    alert("Must be atleast 8 characters but no more than 128.");
    passNum = parseInt(prompt("How many characters do you want in your password? (between 8 and 128 characters)"));
  }

  let lowChar = confirm('Should your password include Lowercase characters?');
  let upperChar = confirm('Should your password include Uppercase characters?');
  let numChar = confirm('Should your password include Numeric characters?');
  let specChar = confirm('Should your password include Special characters?');
    
  while (!lowChar && !upperChar && !numChar && !specChar) {
    alert("You must select at least one character type to include in your password.");
    let lowChar = confirm('Should your password include Lowercase characters?');
    let upperChar = confirm('Should your password include Uppercase characters?');
    let numChar = confirm('Should your password include Numeric characters?');
    let specChar = confirm('Should your password include Special characters?');
  }

  return {
    passNum: passNum,
    lowChar: lowChar,
    upperChar: upperChar,
    numChar: numChar,
    specChar: specChar,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomEl = Math.floor(Math.random() * arr.length);
  return arr[randomEl];
}

// Function to generate password with user input
function generatePassword() {

  let passOptions = getPasswordOptions();
  let passChars = '';

 /* 
  if (passOptions.lowChar) {
    passChars += [...lowerCasedCharacters];
  }

  if (passOptions.upperChar) {
    passChars += [...upperCasedCharacters];
  }

  if (passOptions.numChar) {
    passChars += [...numericCharacters];
  }

  if (passOptions.specChar) {
    passChars += [...specialCharacters];
  }
  */

  if (passOptions.lowChar) {
    passChars = passChars.concat(lowerCasedCharacters);
  }

  if (passOptions.upperChar) {
    passChars = passChars.concat(upperCasedCharacters);
  }

  if (passOptions.numChar) {
    passChars = passChars.concat(numericCharacters);
  }

  if (passOptions.specChar) {
    passChars = passChars.concat(specialCharacters);
  }

  let password = '';

  for (i = 0; i < passOptions.passNum; i++) {
    let randomChar = getRandom(passChars);
    password += randomChar;
  }

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

