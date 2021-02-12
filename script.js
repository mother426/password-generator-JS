// Global DOM Elements 
const generateBtn = document.getElementById("generate");
const characterSliderRange = document.getElementById('characterSliderRange');
const characterNumberRange = document.getElementById('characterNumberRange');

// Arrays created referring to the characters charCodes 
// ASCII table/charCode reference provided by http://www.asciitable.com/
const uppercaseArray = createArray(65, 90);
const lowercaseArray = createArray(97, 122);
const numberArray = createArray(48, 57);
const symbolArray = createArray(33, 47);

// Create arrays using the charCode range as function arguments
function createArray(min, max) {
    const newArray = [];
    for (i = min; i <= max; i++) {
        newArray.push(i);
    };
    return newArray;
};

// Event Listener for Character Slider, performs changeSliderNumber function after an input is detected on DOM elements #characterSliderRange and #characterNumberRange
characterNumberRange.addEventListener('input', changeSliderNumber);
characterSliderRange.addEventListener('input', changeSliderNumber);
// Defines changeSliderNumber function, synchronizes the slider and number display by setting both to a constant called sliderValue
// Target event property selects the element that triggered specific DOM event, in this case, adjusting the slider value. 
// Targeted element display value is changed to equal values on both elements to sync slider 
function changeSliderNumber(slide) {
    const sliderValue = slide.target.value;
    characterNumberRange.value = sliderValue;
    characterSliderRange.value = sliderValue;
};

// Event Listener for Generate Password Button
// Researched arrow function syntax to shorthand the function that is called when the generateBtn element is clicked
// parseInt allows characterNumberRange's type to be a number instead of a string
// Finalized password set to the value of the generatePassword with numberOfChars as an argument 
// Randomly joined password is logged into the textarea containing final password 
generateBtn.addEventListener("click", () => {
    let numberOfChars = parseInt(characterNumberRange.value, 10);
    let finalizedPassword = generatePassword(numberOfChars);
    document.getElementById('generatedPassword').value = finalizedPassword; 
});

// Created function called when generateBtn is clicked. generatePassword takes argument numberOfChars, defined as parseInt(characterNumberRange.value)
// First if alerts user to check at least one box if no boxes are checked 
// If statements check to see which character arrays are to be added
// Password to be generated stored as a new array. 
// For loop iterates through available arrays (can tell if available through if(...checked))
// Random available characters are pushed into randomizedPassword[] until its index reaches the specififed numberOfChars
// Returns the newly joined password to be generated.  
function generatePassword(numberOfChars) {
    let characterCodes = [];
    const uppercaseCheckElement = document.getElementById('includesUpperCase');
    const lowercaseCheckElement = document.getElementById('includesLowerCase');
    const numberCheckElement = document.getElementById('includesNumbers');
    const symbolCheckElement = document.getElementById('includesSpecial');
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
    let randomizedPassword = [];
    for (var i = 0; i < numberOfChars; i++) {
        const randomIndex = Math.floor(Math.random() * characterCodes.length)
        const randomCharacter = characterCodes[randomIndex];
        randomizedPassword.push(String.fromCharCode(randomCharacter));
    }
    return randomizedPassword.join("");
};
