// Global DOM Elements 
const generateBtn = document.getElementById("generate");
const characterSliderRange = document.getElementById('characterSliderRange');
const characterNumberRange = document.getElementById('characterNumberRange');

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
// target event property selects the element that triggered specific DOM event, in this case, adjusting the slider value.  
function changeSliderNumber(slide) {
    const sliderValue = slide.target.value;
    characterNumberRange.value = sliderValue;
    characterSliderRange.value = sliderValue;
}
// Event Listener for Generate Password Button
// Researched arrow function syntax to shorthand the function called when the generateBtn element is clicked
// parseInt allows characterNumberRange's type to be a number instead of a string
// Finalized password joins randomly selected indexes in the available array of characters 
// Randomly joined password is logged into the textarea containing final password 
generateBtn.addEventListener("click", () => {
    let numberOfChars = parseInt(characterNumberRange.value, 10);
    let finalizedPassword = generatePassword(numberOfChars);
    document.getElementById('generatedPassword').value = finalizedPassword; 
    console.log('finalPassword: ', finalizedPassword);
});

// Created function called when generateBtn is clicked. generatePassword takes argument numberOfChars, defined as parseInt(characterNumberRange.value)
// if statements check to see which character arrays are to be added
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
    let randomizedPassword = []
    for (var i = 0; i < numberOfChars; i++) {
        const randomIndex = Math.floor(Math.random() * characterCodes.length)
        const randomCharacter = characterCodes[randomIndex];
        randomizedPassword.push(String.fromCharCode(randomCharacter));
    }
    return randomizedPassword.join("");
};
