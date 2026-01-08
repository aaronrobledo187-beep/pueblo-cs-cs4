console.log("Script started");

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function encrypt() {
    console.log("encrypt");
    // get mesaage text value
    let messageInput = document.getElementById("messageInput");
    let message = messageInput.value;


    // get key value
    let keyInput = document.getElementById("key") 
    let key = parseInt(keyInput.value);
    
    //Loop through mesage characters
    for(let i =0; i < message.length; i++) {
    

     // get the current character (.charAt(i))
       let currChar = message.charAt(i);
     // convert to lowercsae(to.lowercase())
        currcChar =
     //convert to a number (alpha.indexOf(currentchar))
        let charIndex = alpha.indexOf(currChar);
     // apply formula

     //convert new char number into a character alpha[encryptedValue]

     // add encrypted character to a result string

}

function decrypt() {
    console.log("Decrypted");
}