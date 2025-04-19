// Javascript Objects

const userProfile = {
    name: "Krunal",
    age: 45,
    preferences : ['Actions','Comedy'],
    recommend : function(){
        return `Hi ${this.name}, watch some new ${this.preferences[0]} movies today !`;
    }
}
console.log(userProfile.recommend());

// Javascript Events 

const button = document.getElementById('playButton');
button.addEventListener('click', function(){
    console.log('Playing your favorite track !');
}); 

// Changing the text Content

const button1 = document.getElementById('changeTextButton');
const paragraph = document.getElementById('textToChange')
button1.addEventListener('click', function(){
    paragraph.textContent = 'You Clicked the button !';
});

// Add Element in HTML using Javascript
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');
addItemButton.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem);
})

// Cookise and Local Storage

    // set cookise
    document.cookie = "username = Alex; expiers = Fri, 31 Dec 2025 23:59:59 UTC; path=/";
    // get cookise
    console.log(document.cookie)

// Exception Handling in Javascirpt

// Check the Divide value with Exception Handling

function divide(a, b){
    try{
        if(b == 0 || a == 0){
            throw new Error('Division by zero is not allowed');
        }
        return console.log("The Division is : " + a / b);
    } catch(error){
        console.error(error.message);
        return null;
    }
}
console.log(divide(10, 0));
console.log(divide(10, 3));

// Check the age for Votting by Exception Handling

function checkAge(age){
    try{
        if(age<18){
            throw new Error('You are not eligible to vote');
        }
        return console.log("You are Eligible to Vote");
    }catch(error){
        console.error(error.message);
    }finally{
        console.log()
    }
}
checkAge(15);
checkAge(25);

// Arrow Function in Javascript

const sum = (a, b) => a + b;
console.log(sum(5, 10));

const minus = (a, b) => a - b;
console.log(minus(5, 4));

const name1 = (fname) => (`Hello! ${fname}`);
console.log(name1("Krunal"));

// Merging using Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];  // Merging two arrays using Spread (...)
console.log(arr3);

const obj1 = { name: "Krunal", age: 25};
const obj2 = { city: "Surat", country: "India"};
const obj3 = {...obj1, ...obj2};  // Merging two objects using Spread (...)
console.log(obj3);