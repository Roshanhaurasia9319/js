function getRandomCharFromString(inputString) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * inputString.length);
  
    // Access the character at the random index
    var randomChar = inputString[randomIndex];
  
    return randomChar;
  }
  
  // Example usage
  var myString = "Hello, World!";
  var randomChar = getRandomCharFromString(myString);
  
  console.log(randomChar);
  