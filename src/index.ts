import {
    lowerCaseLetters,
    upperCaseLetters,
    specialChars,
    numbers,
  } from "./character-sets";
  
  // password setup
  const mustHaveUpperCaseLetters: boolean = false;
  const mustHaveLowerCaseLetters: boolean = false;
  const mustHaveNumbers: boolean = false;
  const mustHaveSpecialCharacters: boolean = false;
  const passwordLength: number = 20;
  
  type StringOrNumber = string | number;
  
  function getAllowedCharacters(): StringOrNumber[] {
    const allowedCharacters: StringOrNumber[] = [];
  
    if (mustHaveLowerCaseLetters) allowedCharacters.push(...lowerCaseLetters);
    if (mustHaveUpperCaseLetters) allowedCharacters.push(...upperCaseLetters);
    if (mustHaveSpecialCharacters) allowedCharacters.push(...specialChars);
    if (mustHaveNumbers) allowedCharacters.push(...numbers);
  
    return allowedCharacters;
  }
  
  const allowedCharacters = getAllowedCharacters();
  
  function getRandomItemFromArray(array: any[]): any {
    const randomIndex: number = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // make sure at least one of the required characters is present, to pass a potential validator
  function getMandatoryCharacters(): StringOrNumber[] {
    const result: StringOrNumber[] = [];
  
    if (mustHaveLowerCaseLetters) {
        const character: string = getRandomItemFromArray(lowerCaseLetters);
        result.push(character);
      }
    if (mustHaveUpperCaseLetters) {
      const character: string = getRandomItemFromArray(upperCaseLetters);
      result.push(character);
    }
    if (mustHaveSpecialCharacters) {
      const character: string = getRandomItemFromArray(specialChars);
      result.push(character);
    }
    if (mustHaveNumbers) {
      const number = getRandomItemFromArray(numbers);
      result.push(number);
    }
  
    return result;
  }
  
  // fill the rest of the password with whatever is allowed
  function getRandomCharacters(numberOfCharacters: number): StringOrNumber[] {
    const randomCharacters: StringOrNumber[] = [];
  
    for (let i = 1; i <= numberOfCharacters; i++) {
      const randomChar: StringOrNumber = getRandomItemFromArray(allowedCharacters);
      randomCharacters.push(randomChar);
    }
    return randomCharacters;
  }
  
  // randomize the order of items in the array
  function shuffleArray(array: StringOrNumber[]): StringOrNumber[] {
    return array.sort(() => 0.5 - Math.random());
  }
  
  function generatePassword(): void {
    const requiredCharacters: StringOrNumber[] = getMandatoryCharacters();
    const remainingCharacters: StringOrNumber[] = getRandomCharacters(
      passwordLength - requiredCharacters.length
    );
  
    const generatedCharacters: StringOrNumber[] = [
      ...requiredCharacters,
      ...remainingCharacters,
    ];
    const shuffledChars: StringOrNumber[] = shuffleArray(generatedCharacters);
  
    const password = shuffledChars.join("");
    if (!password.length) {
      console.log("Please set at least one condition to generate password");
    } else {
      console.log(password);
    }
  }
  
  generatePassword();
  