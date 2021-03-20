var lowercase='abcdefghijklmnopqrstuvwxyz';
var uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers='1234567890';
var specialCharacters='!@#$%^&*()_+{}:"<>?~';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var possibilities = '';
  var finalPass='';

  //ask the user the 5 questions
  var passLength = parseInt(prompt("How many characters do you want in your password? Choose between 8-129"));

  //check if number of characters is in range

  if (isNaN(passLength)) {
    alert("Hello this is not a number");
    return "Your Secure Password";
  };

  if (passLength < 8) {
    alert("This number is too low");
    return "Your Secure Password";
  };

  if (passLength > 128) {
    alert("This number is too high");
    return "Your Secure Password";
  };

  var lowerChoice = confirm("Do you want lowercase Characters in your password?");

  if (lowerChoice) {
    possibilities += lowercase;
  };

  var upperChoice = confirm("Do you want uppercase Characters in your password?");

  if (upperChoice) {
    possibilities += uppercase;
  };

  var numberChoice = confirm("Do you want numbers in your password?");

  if (numberChoice) {
    possibilities += numbers;
  };

  var specialChoice = confirm("Do you want special characters in your password?");

  if (specialChoice) {
    possibilities += specialCharacters;
  };

  for (var i = 0; i < passLength; i++) {
    //pick a random number
    var randomIndex = Math.floor(Math.random() * possibilities.length);
    var randomCharacter = possibilities[randomIndex];

    //concat string
    finalPass += randomCharacter;
  }

  console.log("*****",finalPass);

  //WRITE CODE HERE
  return finalPass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
