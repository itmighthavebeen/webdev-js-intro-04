"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const responseParagraph = document.getElementById('response');
let age; //this will be undefined until assigned

// create a mutable variable called age and do not assign it a value.


function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    // Clear previous content if needed
responseParagraph.innerHTML = '';


    ageInputEl.value = "";   //Clear the field to be ready for next input
    
            if (isNaN(age) || age > 110) {
                responseParagraph.textContent = "Invalid input. Please enter a valid number for age between 1 and 110."; // Display message if invalid
            } else if (age >= 18 && age < 21) {
                responseParagraph.textContent = `You CAN vote, but you CANNOT purchase alcohol. Be an Informed Voter-research the candidates! Your age is ${age}.`; // Display message if age is valid and between 18-20
            } else if (age >= 21 && age < 100) {
                responseParagraph.textContent = `You CAN vote and purchase alcohol, but no buying alcohol while the polls are open on voting day! Your age is ${age}.`; // Display message if age is 21 or older but not 100 or over
            } else if (age >= 100 && age <= 110) {
                responseParagraph.textContent = `Congratulations on being a centenarian!! You CAN vote and purchase alcohol, but no buying alcohol while the polls are open on voting day! Your age is ${age}.`;
            } else {
                responseParagraph.textContent = `Enjoy being young! You CANNOT vote and you CANNOT purchase alcohol - stay in school and reach for the stars! Your age is ${age}.`; // Display message for ages under 18
            }
        
 
}

// Wait for the Submit button to be pressed
submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    const alphabeticCharacters = /[a-zA-Z]/;

    // Check if the pressed key is a letter (alphabetic characters)
    //? for class - why let them type something in that we don't want and is invalid?
    if (alphabeticCharacters.test(event.key)) {
        event.preventDefault(); // Prevent letters from being typed
    }

    if (invalidCharacters.includes(event.key)) {
        event.preventDefault(); //prevent characters sometimes used in math notation
    }
}

ageInputEl.addEventListener("keydown", validateInput);
