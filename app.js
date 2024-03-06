// // Function to check if a number is divisible by 3
// function checkDivisibilityBy3(number) {
//     if (number % 3 === 0) {
//         console.log(number + " is divisible by 3");
//     } else {
//         console.log(number + " is not divisible by 3");
//     }
// }

// // Taking input from the user
// const userInput = prompt("Enter a number:");

// // Parsing the user input to an integer
// const num = parseInt(userInput);

// // Checking if the input is a valid number
// if (!isNaN(num)) {
//     checkDivisibilityBy3(num);
// } else {
//     console.log("Invalid input. Please enter a valid integer.");
// }




// // Function to check if a number is even or odd
// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log(number + " is an even number");
//     } else {
//         console.log(number + " is an odd number");
//     }
// }

// // Taking input from the user
// const userInput = prompt("Please enter a number:");

// // Parsing the user input to an integer
// const num = parseInt(userInput);

// // Checking if the input is a valid number
// if (!isNaN(num)) {
//     checkEvenOrOdd(num);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

















// let age = 20; // You can change the value of age variable to test different cases

// if (age > 18) {
//     console.log("Old enough");
// } else {
//     console.log("Too young");
// }












// // My name
// const myName = "hassan";

// // Prompting the user for their name
// const userName = prompt("Please enter your name:");

// // Checking if the user's name matches mine
// if (userName === myName) {
//     console.log("Hello, " + userName + "! It's nice to meet someone with the same name as mine.");
// }
















// // Taking input from the user
// const number = parseInt(prompt("Enter a number:"));

// // Checking if the input is a valid number
// if (!isNaN(number)) {
//     // Calculating the remainder when dividing by 3
//     const remainder = number % 3;

//     // Using switch case to determine divisibility by 3
//     switch (remainder) {
//         case 0:
//             console.log("Number is divisible by 3");
//             break;
//         default:
//             console.log("Number is not divisible by 3");
//             break;
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }



















// // Taking input from the user
// const input = prompt("Enter a character:");

// // Converting the input to its ASCII code
// const asciiCode = input.charCodeAt(0);

// // Checking if the input is a number, uppercase letter, or lowercase letter
// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log("The input is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log("The input is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log("The input is a lowercase letter.");
// } else {
//     console.log("The input is not a number, uppercase letter, or lowercase letter.");
// }






















// // Taking input from the user
// const number1 = parseFloat(prompt("Enter the first number:"));
// const number2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /, %):");

// let result;

// // Performing calculations based on the operator
// switch (operator) {
//     case '+':
//         result = number1 + number2;
//         console.log("The result of addition is: " + result);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log("The result of subtraction is: " + result);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log("The result of multiplication is: " + result);
//         break;
//     case '/':
//         if (number2 !== 0) {
//             result = number1 / number2;
//             console.log("The result of division is: " + result);
//         } else {
//             console.log("Error: Division by zero is not allowed");
//         }
//         break;
//     case '%':
//         result = number1 % number2;
//         console.log("The result of modulus operation is: " + result);
//         break;
//     default:
//         console.log("Invalid operator entered.");
// }
















// // Taking input from the user
// const timeInput = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// // Checking if the input is a valid number
// if (!isNaN(timeInput)) {
//     let hour;
//     let minute;
//     let period;

//     // Extracting hour and minute from the input
//     hour = Math.floor(timeInput / 100);
//     minute = timeInput % 100;

//     // Determining the period (AM or PM)
//     if (hour >= 0 && hour < 12) {
//         period = 'AM';
//     } else {
//         period = 'PM';
//     }

//     // Converting hour to 12-hour clock format
//     if (hour === 0) {
//         hour = 12; // 12 AM
//     } else if (hour > 12) {
//         hour = hour - 12; // PM hours
//     }

//     // Displaying the converted time
//     console.log("The time in 12-hour clock format is: " + hour + ":" + (minute < 10 ? '0' : '') + minute + " " + period);
// } else {
//     console.log("Invalid input. Please enter a valid time.");
// }














// // Taking input from the user
// const year = parseInt(prompt("Enter a year (YYYY format):"));

// // Checking if the input is a valid number
// if (!isNaN(year)) {
//     // Checking if it's a leap year
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is a leap year.");
//     } else {
//         console.log(year + " is not a leap year.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid year.");
// }




















// // Store the correct password
// const correctPassword = "password123";

// // Ask user to enter their password
// const userPassword = prompt("Please enter your password:");

// // Validate the passwords
// if (userPassword === null || userPassword === "") {
//     console.log("Please enter your password");
// } else {
//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password");
//     } else {
//         console.log("Incorrect password");
//     }
// }













// var firstName = "Ali";

// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }














// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }



















// // Accepting two integers from the user
// const num1 = parseInt(prompt("Enter the first integer:"));
// const num2 = parseInt(prompt("Enter the second integer:"));

// // Checking if the inputs are valid numbers
// if (!isNaN(num1) && !isNaN(num2)) {
//     // Comparing the two integers
//     if (num1 > num2) {
//         console.log(num1 + " is larger than " + num2);
//     } else if (num2 > num1) {
//         console.log(num2 + " is larger than " + num1);
//     } else {
//         console.log("Both integers are equal: " + num1);
//     }
// } else {
//     console.log("Invalid input. Please enter valid integers.");
// }












// // Taking input from the user
// const number = parseFloat(prompt("Enter a number:"));

// // Checking the sign of the number
// if (number > 0) {
//     console.log("The number is positive");
// } else if (number < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }











// // Asking the user for the current hour
// const hour = parseInt(prompt("What is the current hour (in 24-hour clock format)?"));

// // Checking the hour and providing appropriate messages
// if (hour >= 6 && hour < 9) {
//     console.log("Breakfast is served.");
// } else if (hour >= 11 && hour < 13) {
//     console.log("Time for lunch.");
// } else if (hour >= 17 && hour < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }











// // Storing a value in a variable
// let variable = 42;

// // Determining the type of the variable
// const variableType = typeof variable;

// // Displaying the type of the variable
// switch (variableType) {
//     case 'number':
//         console.log("The variable is of type 'number'");
//         break;
//     case 'string':
//         console.log("The variable is of type 'string'");
//         break;
//     case 'boolean':
//         console.log("The variable is of type 'boolean'");
//         break;
//     case 'undefined':
//         console.log("The variable is of type 'undefined'");
//         break;
//     default:
//         console.log("The type of the variable is different from number, string, boolean, or undefined");
//         break;
// }














// function isVowel(character) {
//     // Converting the character to lowercase for easier comparison
//     character = character.toLowerCase();

//     // Checking if the character is a vowel
//     if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Taking input from the user
// const inputCharacter = prompt("Enter a character:");

// // Checking if the input is a single character
// if (inputCharacter.length === 1) {
//     console.log("Is the character a vowel? " + isVowel(inputCharacter));
// } else {
//     console.log("Please enter a single character.");
// }















// console.log(10 !== 8); // This will output "true" because 10 is not equal to 8











// // Prompting the user for the number of a month
// const monthNumber = parseInt(prompt("Enter the number of a month (1-12):"));

// // Using a switch statement to determine the name of the month
// switch (monthNumber) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month number. Please enter a number between 1 and 12.");
//         break;
// }
