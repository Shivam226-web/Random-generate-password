const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="@#$^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(lenght > password.length){

    password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;

}

// function copyPassword(){
//     passwordBox.ariaSelected();
//     document.execCommand("copy");
// }
function copyPassword() {
    passwordBox.select(); // Select the text in the input box
    passwordBox.setSelectionRange(0, 9999); // For mobile compatibility

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((err) => {
            console.error("Copy failed", err);
        });
}
