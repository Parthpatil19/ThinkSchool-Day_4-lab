# Javascript Basic -
<hr>
<h1>Variables</h1>

# Initializing a variable -
Initialization means assigning a value to a variable at the time of declaration.
```js
    /* Initializing a variable */
    Name = "Parth";
    Age = 22;
    /*returned the value as Parth */
```

# Declaring a variable -
Variables are declared using let or const. This step creates a named storage for data in memory.
```js
/*Declaring a variable */
let Name;
let Age;
/* returned undefined on web browser console */
```

# Updating a variable -
Variables declared with let or var can be reassigned new values after declaration.
```js
let Name = "Parth";
Age = 22;
/*Updating a variable*/
Name = "rahul";
```

# Variable types -
JavaScript supports multiple data types including Number, String, Boolean, Object, Array, Null, and Undefined.
```js
/*Number*/
let myAge = 17;
/*String*/
let think = "Thinkbridge";
/*Booleans*/
let isThinker = true;
/*Arrays*/
let myNameArray = ["Parth", "Rahul", "Raj"];
let myNumberArray = [100, 200, 400];
/*objects*/
let Thinkbridge = { name: "Parth", role: "SDE" };
console.log(Thinkbridge.role);//SDE
```
# Dynamic typing -
JavaScript is dynamically typed, meaning the type of a variable can change at runtime based on the assigned value.
```js
/*Dynamic Typing*/
let myNumber = "500"; // datatype - string
typeof myNumber;
myNumber = 500; //datatype - number
typeof myNumber;
```
# Constants in JavaScript -
Constants declared with const cannot be reassigned after initialization. However, objects and arrays declared with const can still have their contents modified.
```js
/*Constants in javascript */
let count = 1;
count = 2;
//const count = 1;
//count = 2;//error
```
<hr>
<h2>Arrays -</h2>

# Creating arrays -
Arrays are special variables used to store multiple values in a single structure.
```js
//Creating an array -
let thinkschool =["Passion","Consistency","Pride"];
console.log(thinkschool);
```
# Finding the length of an array -
The length property of an array returns the total number of elements it contains.
```js
//Finding Length of an array -
console.log(thinkschool.length);
```
# Accessing and modifying array items -
Array elements are accessed using their index, and values can be updated by assigning new data to a specific index.
```js
//Accessing and modifying array items - 
console.log(thinkschool[1]);
//modify-
thinkschool[0]="Passionate";
console.log(thinkschool);
```
# Finding the index of items in an array -
You can search for the position of a specific element in an array, which helps in locating items.
```js
//Finding the index of an item in array - 
console.log(thinkschool.indexOf("Pride"));
```
# Adding items -
New elements can be inserted into an array, either at the end, the beginning, or a specific index.
```js
//Adding items - 
thinkschool.push("Thinker");
console.log(thinkschool);
```
# Removing items -
Elements can be removed from arrays, either by deleting specific positions or by removing from the start/end.
```js
//Removing item -
thinkschool.pop("Thinker");
console.log(thinkschool);
```
# Accessing every item -
You can loop through an array to process or display each element individually.
```js
//Accesing every item -
for(let moto of thinkschool){
    console.log(moto);

}
```
# Converting between strings and arrays -

Arrays can be transformed into strings and strings can be split into arrays, enabling easy manipulation of data formats.
```js
//Conversion between strings and array - 
let str = "there's a new way there";
let rev = str.split(" ");
console.log(rev);
```
```js
//Conversion between strings and array - 
let str = "there's a new way there";
let rev = str.split(" ");
console.log(rev);
```
<hr>
<h1>Strings</h1>

# Declaring strings – 
Strings can be declared using single quotes, double quotes, or backticks. All are valid in JavaScript.
```js
//Declaring strings - 
let stringdemo = "Thinbridge - there's a new way there";
console.log(stringdemo);
```
# Single quotes, double quotes, and backticks – 
Any of these can be used to define strings. Backticks additionally allow template literals.
```js
//Single quotes, double quotes, and backticks
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);// All are accepted
```
# Embedding JavaScript – 
Template literals (backticks) let you embed variables or expressions inside strings using ${}.
```js
//Embedding JavaScript
let name = "Parth";
let greeting = `Hello, ${name}`; // While embedding name,it should be in backticks
console.log(greeting); // "Hello, Parth"
```
# Concatenation of string – 
Strings can be joined together using the + operator.
```js
//Concatenation of string - 
let name2 = "Parth";
let greeting2 = "Hello";
console.log(greeting2 + ", " + name2); // "Hello, Parth"
```
# Template literals ${} – 
This feature only works with backticks, not with single or double quotes.
```js
//we can use ${} only with template literals, not normal strings. Example :
const name3 = "Parth";
const greeting3 = "hi";
console.log(`${greeting3}, ${name3}`); // "hi , Parth"
```
# Including expressions in strings – 
Template literals allow direct insertion of expressions or calculations inside strings.
```js
//Including expressions in strings - 
let company = "Thinkbridge";
let rating = 9;
let maxrating = 10;
let review = `I loved working at ${company}. I would give a rating percentage of ${
  (rating/maxrating)*100
}%.`;
console.log(review); // I loved working at Thinkbridge. I would give a rating percentage of 90%.
```

# Multiline strings – 
Backticks make it easy to write strings across multiple lines without special characters.
```js
//Multiline strings -
let Multiline = `Thinkbridge
there's a new way there,`;
console.log(Multiline);
/*Thinkbridge
there's a new way there,*/
```
# String-Methods

# Finding the length of a string -
The length property gives the total number of characters in a string.
```js
//Finding the length of a string
let employee = "Hello Reviewer, this is Parth. I hope you are doing well.";
console.log(employee.length);//57
```
# Retrieving a specific string character -
Individual characters in a string can be accessed using their position (index).
```js
//Retrieving a specific string character -
console.log(employee[10]);//e
```
# Testing if a string contains a substring -
You can check whether a smaller string exists inside a larger string.
```js
//Testing if a string contains a substring -
let sub = "Reviewer";
if(employee.includes(`${sub}`)){
    console.log(`Found ${sub} `);
}else{
    console.log(`No ${sub}`);
}// Found Reviewer

if(employee.startsWith(`${sub}`)){
    console.log(`Found ${sub} `);
}else{
    console.log(`Not starting with ${sub}`);
}//Not starting with Reviewer

if(employee.endsWith(`${sub}`)){
    console.log(`Found ${sub} `);
}else{
    console.log(`Not ending with ${sub}`);
}//Not ending with Reviewer

//Extracting a substring from a string
console.log(employee.slice(0,5));//Hello
console.log(employee.slice(31));//I hope you are doing well.
```
# Finding the position of a substring in a string -
The position (index) of the first occurrence of a substring can be located within a string.

# Extracting a substring from a string -
A portion of a string can be taken out to form a new string.
```js
//Extracting a substring from a string
console.log(employee.slice(0,5));//Hello
console.log(employee.slice(31));//I hope you are doing well.
```
# Changing case -
Strings can be converted to uppercase or lowercase for formatting or comparisons.
```js
//Changing case -
let str1 = "Working at Thinkbridge";
console.log(str1.toLocaleLowerCase());
console.log(str1.toUpperCase());
//working at thinkbridge
//WORKING AT THINKBRIDGE
```
# Updating parts of a string -
Parts of a string can be replaced or modified to form a new version of the string.
```js
//Updating parts of a string -
let manifest = "Intern as a thinker at thinkbridge";
console.log(manifest.replace("Intern","Placed"));
```
<hr>
<h2>Conditionals</h2>

# if...else statements
The if...else statement allows code to run only if a certain condition is true, and an alternative block runs if it is false.
```js
//if...else statements -
let score = 200;
if(score>170){
    console.log("Selected at thinkbridge");
}
else{
    console.log("Better Luck next time.Keep Hustling");
}
//Selected at thinkbridge
```
# else if statement
The else if statement allows testing of multiple conditions in sequence. If the first if condition is false, the program checks the next else if condition, and so on, until one is true or the final else block runs.
```js
//else if -
let choice = "BMW" ;
if(choice == "Mercedes-Benz"){
    console.log("Want Mercedes-Benz !, Start 1 Bussiness");
}
else if(choice == "BMW"){
    console.log("Want BMW !,Start 2 Bussiness");
}
else if(choice == "Private-jet"){
    console.log("Want Private-jet !, Start 3 Bussiness");
}
//Want BMW !,Start 2 Bussiness
```
# Nested if...else
A nested if...else means placing one if...else statement inside another. It is used when multiple levels of conditions need to be checked in a structured order.
```js
//Nesting if...else -
let want = "yes";
let work = 8;
if(want == "yes"){
    if(work<5){
        console.log("Need to work for more hours");
    }else{
        console.log("great work");
    }
}else if(want == "No"){
    console.log("Need to restart your journey from beginning");
}
//great work
```
# switch statements
The switch statement is used to perform different actions based on multiple possible values of a variable or expression, making it useful as a cleaner alternative to multiple if...else chains.
```js
//A switch case - 
let car = "Defender";
switch (car) {
  case "Defender":
    console.log("90 lakhs");
    break;
  case "Benz":
    console.log("55 lakh");
    break;
  case "Tata":
    console.log("20 lakhs");
    break;
  case "Kia":
    console.log("30 lalkhs");
    break;
  case "Hyundai":
    console.log("20 lakhs");
    break;
  default:
    console.log("Invalid grade");
}//90 lakhs
```
# Logical Operators
- Logical AND (&&)
Returns true if both conditions are true.
- Logical OR (||)
Returns true if at least one condition is true.
- Logical NOT (!)
Inverts the truth value of a condition (true becomes false, false becomes true).
```js
//Logical operators: AND, OR and NOT -
// Logical AND (&&) 
let number = 45;
console.log(number >= 1 && number <= 100);//true
// Logical OR (||) 
console.log(number < 1 || number > 100);// false 
// Logical NOT (!) 
let isEven = number % 2 === 0;
console.log(!isEven);// true
```
# Ternary operator
The ternary operator (condition ? value1 : value2) provides a concise way to return one of two values based on a condition.

<hr>
<h2>Loops</h2>

# The standard for loop
The for loop is used when the number of iterations is known in advance. It consists of three parts: initialization (sets a starting value), condition (checked before each iteration), and final expression (updates the loop counter after each iteration).
```js
//The standard for loop
let Animals = ["Leopard", "Jaguar", "Tiger","Lion","Cow","Deer"];

for (let i = 0; i < Animals.length; i++) {
  console.log(Animals[i]);
}
```
# do...while loop
The do...while loop executes a block of code at least once, and then continues running as long as the condition remains true.
```js
//while and do...while -
let i = 0;
do {
  console.log("Wild animals are: "+Animals[i]);
  i++;
} while (i < Animals.length);
/*Wild animals are: Leopard
Wild animals are: Jaguar
Wild animals are: Tiger
Wild animals are: Lion
Wild animals are: Cow
Wild animals are: Deer */
```
# break statement
The break statement immediately exits the current loop or switch, skipping all remaining iterations.
```js
//Break 
for (let i = 0; i < Animals.length; i++) {
    if(i == 3){
        break;
    }
  console.log(Animals[i]);
}
/*Leopard
Jaguar
Tiger
*/
```
# continue statement
The continue statement skips the current iteration of a loop and moves on to the next iteration without exiting the loop.
```js
//continue
for (let j = 1; j <= 10; j++) {
  if (j % 2 === 0) {
    continue; 
  }
  console.log("Odd number:", j);
}
/*Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7
Odd number: 9 */
```






