// Assignment Code

// calling out ID from HTML
var generateBtn = document.querySelector("#generate");

// declaring all criteria limiting to 10 of each

var alphabetU = ["p", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphabetL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
var sChars = ["!", "@", "#", "$", "%","^", "&", "*", "<", ">"]
var digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var emotes = ["😎", "😍", "😇", "🥳", "😔", "😆", "🤪", "🧐", "🥰", "😡"]

// assumed fixed number of elements in each array to create randomness in the password
var fix_num_in_array = 10

// calling out ID from HTML to generate the final password

var pwArea = document.querySelector("#password")


// declaring function to run the loop
function writePassword() {

  // declaring an array based on the user's selection
 
  var possibles = []

  // asking the user for the total length of the password 
  // and running the loop only when the user input is 
  // between 8 & 128. 

  var length = parseInt(prompt("How long does this password need to be?"))

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Password length can only be between 8 - 128. Please try again!")
  } else {

    var alphaUTrue = confirm("Do you want chars?")

    var alphaLTrue = confirm("Do you want Lowercase aphabets?")    

    var sCharsTrue = confirm("Do you want special chars?")

    var digitTrue = confirm("Do you want nums?")

    var emojisTrue = confirm("Do you want emojis?")

    // creating a new array of previously declared arrays

    if (alphaUTrue) possibles.push(alphabetU)
    if (alphaLTrue) possibles.push(alphabetL)
    if (sCharsTrue) possibles.push(sChars)
    if (digitTrue) possibles.push(digit)
    if (emojisTrue) possibles.push(emotes) 

    // declaring an empty variable of pw to start

    var pw = ""

    // creating a while loop with the condition to 
    // run until the password length is lesser than the User input length

    while (pw.length < length){

    // creating 2 different random number variables based of
    // 1. length of the created array of arrays;
    // 2. length of the assumed fixed (10) elements in the initially declared arrays

      i =  Math.floor(Math.random() * ((possibles.length) - 0)) + 0;
      j =  Math.floor(Math.random() * ((fix_num_in_array -1)  - 0)) + 0;

      // accumulating the random collected elements to created a random password

      pw += possibles[i][j]

    }

    // console logging to verify the length of the newly generated password

    console.log(pw, `password length: ${pw.length}`)

    // printing newly geenrated password on the pwArea
    pwArea.textContent = pw
  }
}

// creating an event listened and invoking right password function
generateBtn.addEventListener("click", writePassword);
