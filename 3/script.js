// STYLE HTML: JS DOM MANIPULATION

const form = document.getElementsByTagName("form"); 
const nameLabel = document.getElementById("nameLabel");
const emailLabel = document.getElementById("emailLabel");
const phoneLabel = document.getElementById("phoneLabel");
const inputFields = document.querySelectorAll("input")

const messageLabel = document.getElementById("messageLabel");
const textarea = document.querySelector("textarea")

const optionsLabel = document.getElementById("optionsLabel");
const options = document.getElementById("options");

const submitButton = document.getElementById("submitButton");


nameLabel.textContent = "Name: ";
emailLabel.textContent = "Email: ";
phoneLabel.textContent = "Phone: ";

messageLabel.textContent = "Write your message here: ";
optionsLabel.textContent = "Choose your option: ";

document.body.style.backgroundColor = "black";
document.body.style.color = "orange";
document.body.style.fontFamily = "Oswald, serif"; 

//_____ALIGN FORM CENTER? 
form[0].style.border = "2px solid orange";
form[0].style.borderRadius = "5px";
form[0].style.margin = "2rem";
form[0].style.padding = "2rem";
form[0].style.maxWidth = "25rem";
form[0].style.textAlign = "center";

inputFields.forEach(input => {
    input.style.color = "black";
    input.style.backgroundColor = "grey";
    input.style.border = "2px solid grey";
    input.style.borderRadius = "3px";
    input.style.fontFamily = "Oswald, serif";
})

textarea.style.color = "black";
textarea.style.backgroundColor = "grey";
textarea.style.border = "2px dotted orange";
textarea.style.borderRadius = "3px";
textarea.style.fontFamily = "Oswald, serif";

options.style.color = "black";
options.style.backgroundColor = "grey";
options.style.border = "2px solid grey";
options.style.borderRadius = "3px";
options.style.fontFamily = "Oswald, serif";

submitButton.style.color = "black";
submitButton.style.backgroundColor = "grey";
submitButton.style.border = "2px solid grey";

submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "orange";
    submitButton.style.color = "black";
    submitButton.style.border = "2px solid orange";
    submitButton.style.transition = "background-color 0.3s, color 0.3s";
});

submitButton.addEventListener("mouseout", () => {
    submitButton.style.color = "black";
    submitButton.style.backgroundColor = "grey";
    submitButton.style.border = "2px solid grey";  
    submitButton.style.transition = "background-color 0.3s, color 0.3s";
})