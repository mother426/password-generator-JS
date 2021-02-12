// Elements containing a value or an event defined as constants 
const generateBtn = document.getElementById("generate");
const characterSliderRange = document.getElementById('characterSliderRange');
const characterNumberRange = document.getElementById('characterNumberRange');
const passwordTextField = document.getElementById('generatedPassword');
const uppercaseCheckElement = document.getElementById('includesUpperCase');
const lowercaseCheckElement = document.getElementById('includesLowerCase');
const numberCheckElement = document.getElementById('includesNumbers');
const symbolCheckElement = document.getElementById('includesSpecial');

// Arrays of letters, numbers and symbols created by the createArray function stored into constants using their ASCII code 
// ASCII table reference provided by http://www.asciitable.com/
const uppercaseArray = createArray(65, 90);
const lowercaseArray = createArray(97, 122);
const numberArray = createArray(48, 57);
const symbolArray = createArray(33, 47);

// Function Created to Create arrays with specified values emcompassing the necessary characters by charCode
function createArray(min, max) {
    const newArray = [];
    for (i = min; i <= max; i++) {
        newArray.push(i);
    }
    return newArray;
}
// Event Listener for Character Slider, performs changeSliderNumber function after an input is detected on DOM elements #characterSliderRange and #characterNumberRange
characterNumberRange.addEventListener('input', changeSliderNumber);
characterSliderRange.addEventListener('input', changeSliderNumber);
// defines changeSliderNumber function, synchronizes the slider and number display by setting both to a constant called sliderValue
function changeSliderNumber(slide) {
    const sliderValue = slide.target.value;
    characterNumberRange.value = sliderValue;
    characterSliderRange.value = sliderValue;
}
// Event Listener for Generate Password Button
generateBtn.addEventListener("click", () => {
    let numberOfChars = parseInt(characterNumberRange.value, 10);
    let finalizedPassword = generatePassword(numberOfChars);
    console.log('finalPassword: ', finalizedPassword);
});

// Created function called when generateBtn is clicked. generatePassword takes argument numberOfChars, which is equal to the value of characterNumberRange converted to a number
function generatePassword(numberOfChars) {
    let characterCodes = [];
    if (!uppercaseCheckElement.checked && !lowercaseCheckElement.checked && !numberCheckElement.checked && !symbolCheckElement.checked) {
        alert("Please check at least one")
    }
    if (uppercaseCheckElement.checked) {
        characterCodes = characterCodes.concat(uppercaseArray);
    }
    if (lowercaseCheckElement.checked) {
        characterCodes = characterCodes.concat(lowercaseArray);
    }
    if (numberCheckElement.checked) {
        characterCodes = characterCodes.concat(numberArray);
    }
    if (symbolCheckElement.checked) {
        characterCodes = characterCodes.concat(symbolArray);
    }
    let randomizedPassword = []
    for (var i = 0; i < numberOfChars; i++) {
        const randomIndex = Math.floor(Math.random() * characterCodes.length)
        const randomCharacter = characterCodes[randomIndex];
        randomizedPassword.push(String.fromCharCode(randomCharacter));
    }
    return randomizedPassword.join("");
};

// Write password to the #password input
// function writePassword() {
//   const numberOfChars = +characterNumberRange.value; 
//   const upperChecked = uppercaseCheckElement.checked;
//   const lowerChecked = lowercaseCheckElement.checked;
//   const numbersChecked = numberCheckElement.checked;
//   const symbolChecked = symbolCheckElement.checked;
//   console.log(numberOfChars, upperChecked, lowerChecked, numbersChecked, symbolChecked);
// }

// Constant object created with random character generation functions as its attributes 
// const randomGeneratedPass = {
//   upperCase: randomUpperCase,
//   upperCase: randomLowerCase,
//   numbers: randomNumber,
//   symbols: randomSymbol
// };

// // Returns a random uppercase letter using ASCII codes
// function randomUpperCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log(randomUpperCase());
// // Returns a random lowercase letter using ASCII codes 
// function randomLowerCase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(randomLowerCase());
// // Returns a random number 0-9 using ASCII codes 
// function randomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log(randomNumber());
// // Returns a random symbol using ASCII codes
// function randomSymbol() {
//   return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
// }
// console.log(randomSymbol());