/*const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again

  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again
  
  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password*/

// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getPasswordOptions() {
  const length = parseInt(
    prompt(
      "How many characters would you like your password to contain? Enter a number between 8 and 128."
    )
  );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Password length must be between 8 and 128 characters");
    return null;
  }

  const includeLowercase = confirm(
    "Click OK to confirm including lowercase characters. Click Cancel to exclude lowercase characters."
  );
  const includeUppercase = confirm(
    "Click OK to confirm including uppercase characters. Click Cancel to exclude uppercase characters."
  );
  const includeNumbers = confirm(
    "Click OK to confirm including numeric characters. Click Cancel to exclude numeric characters."
  );
  const includeSpecial = confirm(
    "Click OK to confirm including special characters. Click Cancel to exclude special characters."
  );

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecial
  ) {
    alert("Must select at least one character type");
    return null;
  }

  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecial: includeSpecial,
  };
}


function generatePassword() {
  const options = getPasswordOptions();
  if (!options) return null;

  const allowedCharacters = [];
  if (options.includeLowercase) allowedCharacters = allowedCharacters.concat(lowerCasedCharacters);
  if (options.includeUppercase) allowedCharacters = allowedCharacters.concat(upperCasedCharacters);
  if (options.includeNumbers) allowedCharacters = allowedCharacters.concat(numericCharacters);
  if (options.includeSpecial) allowedCharacters = allowedCharacters.concat(specialCharacters);

  let password = "";
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomIndex];
  }

  return password;
}
