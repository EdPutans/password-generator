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
exports.allCharacters = exports.numbers = exports.specialChars = exports.upperCaseLetters = exports.lowerCaseLetters = void 0;
exports.lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
exports.upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
exports.specialChars = ['!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '[', ']', ',', '.', '/', '?'];
exports.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
exports.allCharacters = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], exports.lowerCaseLetters, true), exports.upperCaseLetters, true), exports.specialChars, true), exports.numbers, true);
