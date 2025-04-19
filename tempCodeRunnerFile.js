const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = { name: "Krunal", age: 25};
const obj2 = { city: "Surat", country: "India"};
const obj3 = {...obj1, ...obj2};
console.log(obj3);