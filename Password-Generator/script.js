// Assignment Code
var generateBtn = document.querySelector(".btn");

//Declares variable arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharactersArray = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];

var possibleChars = [];

//Creates series of confirm boxes that allow user to determine whether or not to include characters in password
function confirmFunction() {
  let text;

  //Creates prompt box requesting user to enter a number within the parameters to determine password length

  var passwordLength = prompt("Your password must contain between 8 and 128 characters. Please deterine the length of your password by typing a number between 8 and 128 in the field below. Click OK to continue.");

  if
    (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry please try again")
    confirmFunction();

  }
  let lowercase = confirm("Click OK to include lowercase letters");
  console.log(lowercase);

  let uppercase = confirm("Click OK to include uppercase letters");
  console.log(uppercase);

  let numbers = confirm("Click OK to include numbers");
  console.log(numbers);

  let specialCharacters = confirm("Click OK to include special characters");
  console.log(specialCharacters);

  generatePassword(lowercase, uppercase, specialCharacters, numbers,passwordLength)

}
function generatePassword(lowercase, uppercase, specialCharacters, numbers, passwordLength) {
  if (lowercase == true) {
    possibleChars = possibleChars + lowercaseArray
  }
  if (uppercase == true) {
    possibleChars +=  uppercaseArray
    console.log("here");
  }
  if (numbers== true) {
    possibleChars = possibleChars + numbersArray
  }
  if (specialCharacters == true) {
    possibleChars = possibleChars + specialCharactersArray
    console.log(possibleChars);
  }
  var randomIDX = Math.floor(Math.random() * possibleChars.length);

  // console.log(randomCharacters)

  password += randomCharacters;

  console.log(password);

  var password = ""
for (let index = 0; index < passwordLength; index++){
  
  var randomIDX = Math.floor(Math.random() * possibleChars.length);
  console.log(possibleChars[randomIDX])
};

}






// var randomIDX = Math.floor(Math.random() * lowercaseArray.length);
// var randomCharacter = lowercaseArray[randomIDX]
// console.log(randomCharacter)


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = "password" +randomCharacters * passwordLength;
}




writePassword()
