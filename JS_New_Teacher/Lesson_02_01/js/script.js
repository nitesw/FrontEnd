let CountSpaces = (str) => {
  let count = str.split(" ").length - 1;
  return count;
};
let MakeAnUpperCase = (str) => {
  let firstLetter = str.charAt(0).toUpperCase();
  let tmpStr = firstLetter + str.slice(1);

  return tmpStr;
};
let CountWords = (str) => {
  let countWords = str.trim().split(" ");
  console.log(`Words in the sentence: ${countWords.length}`);
};
let CreateAnAbbreviation = (str) => {
  let words = str.trim().split(" ");
  let abbreviation = "";

  for (let index = 0; index < words.length; index++) {
    abbreviation += words[index][0].toUpperCase();
  }

  console.log(`Abbreviation for '${str}' is ${abbreviation}`);
};
let CheckIfPalindrome = (str) => {
  let reversedStr = str.trim().split("").reverse().join("").toLowerCase();
  let lowerStr = str.toLowerCase();

  console.log(
    `The word '${str}' is ${
      lowerStr === reversedStr ? "palindrome" : "not palindrome"
    }`
  );
};
let DetailedInfo = (str) => {
  let domenRegex = /((\/\/(.*?)\/))/;
  let pathRegex = /https?:\/\/[^\/]+(\/[^?#]*)/;
  let protocol = str.substring(0, str.indexOf(":"));
  let domen = str.match(domenRegex);
  let path = str.match(pathRegex);

  console.log(
    `Deatiled info for '${str}':\nProtocol: ${protocol}\nDomen: ${domen[3]}\nPath: ${path[1]}`
  );
};

let str = "hey you there! Welcome here! Damn    ";

console.log(`The sentence '${str}' have ${CountSpaces(str)} spaces`);

str = MakeAnUpperCase(str);
console.log(str);

CountWords(str);

CreateAnAbbreviation(str);

let palindrome = "Heyyyyeh";
CheckIfPalindrome(palindrome);

str = "https://soundcloud.com/kencarson/popular-tracks";
DetailedInfo(str);
