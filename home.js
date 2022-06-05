
console.log("hello");
//alert("yo this is joo");
// variables 
var a ='joo'
console.log(a);
// changeing HTML code using javascript
//document.getElementById('sometext').innerHTML = 'hello joo';
// var age = prompt('what is your age ?');

//document.getElementById('sometext').innerHTML = age;

// numbers in javascript 
//var num1 = 10;
//num1 = num1 + 1;
//console.log(num1);
//another way of incrementing numbers
//var num1 = 10;
num1++;
//num1++;
//console.log(num1);
//decrement num1 by 1 
var num1 = 10;
//num1--;
//num1--;
console.log(num1);
// devide, multiply*, remainder %
console.log(num1 % 6)
// incerement and decrement by any number you want 
num1 += 10;
console.log(num1);
/*functions in javascript
1. create a function
2. call a function 
*/
// create
/*function fun(){
    alert('this is afunction')
}*/
//call
//fun();
/* lets create a function that takes in a name and says 
hello followed by your name
name: "joo"
retutn: "hello joo"
*/
function greeting() {
    var name = prompt('whats your name ?');
    var result = 'hello' + ' '+ name;// this is called string concatination adding some space b/n the strings 
    console.log (result);
    
}
//greeting();

//how do arguments works in function ?
// how do we add 2 numbers in a function ?
/*function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 10);*/
//while loops
/*var num = 0;
while (num < 100){
    num += 1;
    console.log(num);
}*/
// for loop
for (let num = 0; num <=100; num++){
    console.log(num);
}
// data types 
let yourAge = 18; //number
let yourName = 'joo'; //string
let name = {first: 'joo' , last: 'man'}; //object
let truth = false; //boolean 
let groceries = [ 'apple', 'banana', 'orange']; //array
let random; //undifined 
let nothing = null; // value null
//strings in javascript (common methods)
let fruit = 'banana' ;
let morefruits = 'banana\napple'; // \n refers to us new line 

console.log(morefruits);
console.log(morefruits.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(3));
console.log(fruit.split('')); // split by comma
console.log(fruit.split(',')); // split by characters 
// Array
let fruits = ['bananna' , 'apple', 'orange','pinapple'];
fruits = new Array ('bananna' , 'apple' , 'orange' , 'pinapple')
console.log(fruits[2]); //acess the value of index number 2 
fruits[0] = 'pear';
console.log(fruits); // changing the value of fruits 
for (let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//Array common method
console.log('to string ', fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(), fruits); // removes the last item
console.log(fruits.push('strawberry'), fruits); // appends 
console.log(fruits[4]);
fruits[fruits.length] = 'new fruits';
console.log(fruits) 
fruits.shift(); // removes the first element from the array
console.log(fruits)
fruits.unshift('blueberry'); // add the first element to the array 

let vegtables = ['tomato', 'potato', 'onion', 'cabbage']
let allGroceries = fruits.concat(vegtables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [2, 54, 35, 65, 566, 455, 65, 533, 221, 21, 16]
console.log(someNumbers.sort(function(a, b){return a-b})); // soreted in ascending oreder 
console.log(someNumbers.sort(function(a, b){return b-a})); // soreted in decending  oreder 


let emptyArray = new Array();
for (let num = 0; num <=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// object in javascript is what we call it dictionaries in python 


let student = {
    first: 'joo',
    last: 'man',
    age: '25',
    height: '170',
    studentinfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    } // this is equal to self in in python 

};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notjoo'; // changing the value
//console.log(student.first);
//student.age++;
//console.log(student.age);

console.log(student.studentinfo()); 

// condtionals,  control flows (if else) 
// 18-35 is my target demographic 
// && AND
// || or 
var age = 34;

if ((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audiance';
    console.log(status);
}

// switch statements 
// diffrence between weekday vs weekend 
// day 0 --> sunday --> weekend 
// day 1 --> monday --> weekday
// day 2 --> tusday --> weekday
// day 3 --> wensday --> weekday
// day 4 --> thrsday --> weekday 
// day 5 --> friday --> weekend
// day 6 --> saturday --> weekend 

switch(6) {
    case 0: 
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';

}
console.log(text);

// json is used to represent data, stands for javascript object notaion generally it uses Api's to carry information thats very light wight api's and configration 
// it's an object with an array inside of it.