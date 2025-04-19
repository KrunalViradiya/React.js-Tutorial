console.log("Welcome to js Course");
var myname = "krunal viradiya";

var my_firstName = "Raju"; // valid
var _myLastName$ = "Raju";  //valid
// var 123myAge = 24;  //not valid
var $cityName = "India"; //valid
// var my@Email = "krunal@gmail.com"  //not valid

console.log(my_firstName)
console.log(_myLastName$)
// console.log(123myAge)
console.log($cityName)
// console.log(my@Email)

var number = -5
console.log(number)

var isRain = true
console.log(isRain)

// var lalu = parth
// console.log(typeof(lalu))

var number = "10"
console.log(typeof +number)
console.log(typeof Number(number))
console.log(typeof String(number))
console.log(typeof Boolean(number))

b = 5+75
console.log(b)

let sum = 5 + "10"
console.log(sum)

let Sum = "5" + 10
console.log(Sum)

console.log("Krunal" - "Patel")

console.log(true+false)
console.log(false+false)
console.log(false+true)
console.log(true+true)

a = 10
b = 20

console.log("Addition : ",a+b)
console.log("Substraction : ",a-b)
console.log("Multiplication : ",a*b)
console.log("Moduler : ",a%b)

console.log("Hello"/2)

var result = 0.1+0.2
console.log(result.toFixed(2))  // decimal ma pachal 2 digit ave 4 lakho to 4 ave

console.log(5 == "5")
console.log(5 != "5")
console.log(5 === "5")

// Write a program that determines if a person is eligible to drive based an their age being grater than or equal to 18 and having a valid driver's licencse ?

a = 20

if (a=>18)
{
    console.log("Eligible to Drive")
}
else
{
    console.log("Not eligible to drive")
}

// sem above code with driving licence

a = 20
isLicence = true
if(a>=18 && isLicence==true)
{
    console.log("You are eligible for Drive")
}
else
{.302
    console.log("Sorry! you are not eligibel for Drive")
}

var check = a>=18 && isLicence==true? "You are eligible for Drive" : "Sorry! you are not eligibel for Drive"
console.log(check)

age = 20
var result = age>=18? "Yes" : "No"
console.log(result)
