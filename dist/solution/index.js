"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var character_sets_1 = require("./character-sets");
// password configuration
var mustHaveUpperCaseLetters = false;
var mustHaveLowerCaseLetters = false;
var mustHaveNumbers = false;
var mustHaveSpecialCharacters = false;
var passwordLength = 20;
// get all characters that are allowed according to our setup
function getAllowedCharacters() {
    var allowedCharacters = [];
    if (mustHaveLowerCaseLetters)
        allowedCharacters.push.apply(allowedCharacters, character_sets_1.lowerCaseLetters);
    if (mustHaveUpperCaseLetters)
        allowedCharacters.push.apply(allowedCharacters, character_sets_1.upperCaseLetters);
    if (mustHaveSpecialCharacters)
        allowedCharacters.push.apply(allowedCharacters, character_sets_1.specialChars);
    if (mustHaveNumbers)
        allowedCharacters.push.apply(allowedCharacters, character_sets_1.numbers);
    return allowedCharacters;
}
// given an array, return a random item from it   
function getRandomItemFromArray(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
// make sure at least one of the required characters is present, to pass a potential validator
function getMandatoryCharacters() {
    var result = [];
    if (mustHaveLowerCaseLetters) {
        var character = getRandomItemFromArray(character_sets_1.lowerCaseLetters);
        result.push(character);
    }
    if (mustHaveUpperCaseLetters) {
        var character = getRandomItemFromArray(character_sets_1.upperCaseLetters);
        result.push(character);
    }
    if (mustHaveSpecialCharacters) {
        var character = getRandomItemFromArray(character_sets_1.specialChars);
        result.push(character);
    }
    if (mustHaveNumbers) {
        var number = getRandomItemFromArray(character_sets_1.numbers);
        result.push(number);
    }
    return result;
}
// fill the rest of the password with whatever is allowed
function getRandomCharacters(numberOfCharacters) {
    var randomCharacters = [];
    var allowedCharacters = getAllowedCharacters();
    for (var i = 1; i <= numberOfCharacters; i++) {
        var randomChar = getRandomItemFromArray(allowedCharacters);
        randomCharacters.push(randomChar);
    }
    return randomCharacters;
}
// randomize the order of items in the array
function shuffleArray(array) {
    return array.sort(function () { return 0.5 - Math.random(); });
}
// generate the final result
function generatePassword() {
    var requiredCharacters = getMandatoryCharacters();
    var remainingCharacters = getRandomCharacters(passwordLength - requiredCharacters.length);
    var generatedCharacters = __spreadArray(__spreadArray([], requiredCharacters, true), remainingCharacters, true);
    var shuffledChars = shuffleArray(generatedCharacters);
    var password = shuffledChars.join("");
    if (!password.length) {
        console.log("Please set at least one condition to generate password");
    }
    else {
        console.log(password);
    }
}
// init, essentially.
generatePassword();
