// Last Week Revision 
    // Variables only var
    // Conditions
    // Printing Statements
    // if else revision


// One lien conditions of Drive a Vehicle Conditions
age = 20
licence = true
var check = age>=18 && licence == true ? "You are Eligible to drive" : "You are not Eligible to drive"
console.log(check)

// One line condition of Ride a trip
ag = 14
var ride = ag >= 5 && ag <= 15 ? "Ride the trip" : "Do not Enter"
console.log(ride)

// Trafice Signle If Else code
var traffice = "green"
if(traffice === "red"){
    console.log("Stop")
}
else if (traffice === "yellow"){
    console.log("Slow")
}
else if (traffice === "green"){
    console.log("Go")
}
else{
    console.log("Invalid")
}

// Weather Program with if else

var weather = "rain"
if (weather == "rain"){
    console.log("Bring Umbrella")
}
else{
    console.log("No Umbrella")
}

// Single line For it Weather Program

var weather = "rain"
var result = weather == "rain" ? "Bring Umbrella" : "No Umbrella"
console.log(result)

// Take any 2 Example of if else conditions and run the code

    //1. Attdenace System 
    var attendance = 90
    var check = attendance >= 75 ? "You are eligible to Seat in Exam" : "You are not Eligible"
    console.log(check)

    //2. Bank Loan Eligibility
    var civilscore = 10
    var checkloan = civilscore >= 7 ? "You are Eligible for Loan" : "You are not Eligible"
    console.log(checkloan)  

// Switch case statement

var day = "monday"
switch(day){
    case "monday":
        console.log("Today is Monday")
        break;
    case "Tuseday":
        console.log("Today is Tuseday")
        break;
    case "wednesday":
        console.log("Today is Wednesday")
        break;
    case "Thusday":
        console.log("Today is Thusday")
        break;
    case "Frieday":
        console.log("Today is Frieday")
        break;
    case "Saturday":
        console.log("Today is Saturday")
        break;
    case "Sunday":
        console.log("Today is Sunday")
        break;
    default:
        console.log("Invalid Day")
}

// Music Player Switch Case code

var music = "Play"
switch(music){
    case "Play":
        console.log("Playing Music")
        break;
    case "Pause":
        console.log("Music Paused")
        break;
    case "Prev":
        console.log("Previous Song")
        break;
    case "Next":
        console.log("Next Song")
        break;
    case "Stop":
        console.log("Music Stopped")
        break;
    default:
        console.log("Player is not working (OFF)")
}

// While loop statements

var a = 1;
while (a <= 15) {
    console.log(a);
    a++;
}

// While loop print Table of any number

var num = 7;
var count = 1;
while (count <= 10){
    console.log(num + " x " + count + " = " + num * count);
    count++;
}

// Usign the $ variable

var num = 1
while(num <= 10){
    console.log(`5 * ${num} = ${5 * num}`);
    num++
}

// Do while loop statement

var num = 1
do{
    console.log(`5 * ${num} = ${5 * num}`);
    num++;
}while(num <= 10)


// Take a input from the user

let userInput;
let positiveNumber;
do{
    userInput = prompt("Enter the Positive Number : ");
    positiveNumber = parseFloat(userInput);
}while(isNaN(positiveNumber) || positiveNumber < 0);
console.log("You entered a valid positive number : ",positiveNumber);


// For loop statement in javaScript

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// Calculate the sum of number 1 to 10

var sum = 0
for(let i = 0; i <= 10; i++){
    console.log(sum = sum + i)
}

// Genereate a start methord using for loop

for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

// Homer work
    // Javascript program to print table for given number 8, 9, 12, 15 using for loop
    // Program to check if year is leap year or not


// -----------------------> ES2015 <--------------------------- \\

// Var variable declarations 

var myName = "Krunal";
myName = "Patel"
console.log(myName)

// Const variable declarations

const pi = 3.142
// pi = 34 
console.log(pi)

// Function in Javascript

// Simple Function

function greet() {
    console.log(`Hello Krunal !`);
}
greet();

// Parametrized Function

function greet(name){
    console.log(`Hello ${name} !`);
}
greet("Raju");


// Multiple Parameterized Function

function normalfunc(name, age, city){
    console.log(`Your Name is : ${name}`);
    console.log(`Your age is : ${age}`);
    console.log(`Your city is : ${city}`);
}
normalfunc("Krunal", 45, "Ahmedabad");

// Function of the Calculate the sum of the two numbers with return value

function sum(a, b){
    return a+b;
}
console.log(sum(4, 6));

// Store a function in one variable

let funcInVar = function greet(){
    console.log("Hello Namaste JavaScript !")
}
console.log(funcInVar())

// Function with return type store in variable

let isFunc = function sum(a, b){
    return a + b;
} 
console.log(isFunc(5, 10))




