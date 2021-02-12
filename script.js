// Assignment Code
var generateBtn = document.querySelector("#generate");

// var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "0123456789";
// var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; 

// var upperSplit = upperCaseLetters.split("");
// var lowerSplit = lowerCaseLetters.split("");
// var numbersSplit = numbers.split("");
// var specialSplit = specialCharacters.split("");


console.log(String.fromCharCode(34));












function generatePassword() {
  
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#generatedPassword");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


