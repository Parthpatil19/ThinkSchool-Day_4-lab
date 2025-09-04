/*------------------Variables------------------*/
/*
/*Declaring a variable */
let Name;
let Age;
/* returned undefined on web browser console */

/* Initializing a variable */
Name = "Parth";
Age = 22;
/*returned the value as Parth */

/* About var keyword */
var myName = "Raj";
var myName = "Parth";
/* provides no error */
/*
let myName = "Raj";
let myName = "Parth";
*/
/* provide error */

/*Updating a variable*/
Name = "rahul";
Age = 40;

/*Variable Types */
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

/*Dynamic Typing*/
let myNumber = "500"; // datatype - string
typeof myNumber;
myNumber = 500; //datatype - number
typeof myNumber;

/*Constants in javascript */
let count = 1;
count = 2;
//const count = 1;
//count = 2;//error

/*------------------Arrays------------------*/

//Creating an array -
let thinkschool =["Passion","Consistency","Pride"];
console.log(thinkschool);

//Finding Length of an array -
console.log(thinkschool.length);

//Accessing and modifying array items - 
console.log(thinkschool[1]);
//modify-
thinkschool[0]="Passionate";
console.log(thinkschool);

//Finding the index of an item in array - 
console.log(thinkschool.indexOf("Pride"));

//Adding items - 
thinkschool.push("Thinker");
console.log(thinkschool);

//Removing item -
thinkschool.pop("Thinker");
console.log(thinkschool);

//Accesing every item -
for(let moto of thinkschool){
    console.log(moto);
}

//Conversion between strings and array - 
let str = "there's a new way there";
let rev = str.split(" ");
console.log(rev);

/*------------------String------------------*/

//Declaring strings - 
let stringdemo = "Thinbridge - there's a new way there";
console.log(stringdemo);

//Single quotes, double quotes, and backticks
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);// All are accepted

//Embedding JavaScript
let name = "Parth";
let greeting = `Hello, ${name}`; // While embedding name,it should be in backticks
console.log(greeting); // "Hello, Parth"

//Concatenation of string - 
let name2 = "Parth";
let greeting2 = "Hello";
console.log(greeting2 + ", " + name2); // "Hello, Parth"

//we can use ${} only with template literals, not normal strings. Example :
const name3 = "Parth";
const greeting3 = "hi";
console.log(`${greeting3}, ${name3}`); // "hi , Parth"

//Including expressions in strings - 
let company = "Thinkbridge";
let rating = 9;
let maxrating = 10;
let review = `I loved working at ${company}. I would give a rating percentage of ${
  (rating/maxrating)*100
}%.`;
console.log(review); // I loved working at Thinkbridge. I would give a rating percentage of 90%.

//Multiline strings -
let Multiline = `Thinkbridge
there's a new way there,`; 
console.log(Multiline);
/*Thinkbridge
there's a new way there,*/

/*---Useful string methods--*/

//Finding the length of a string
let employee = "Hello Reviewer, this is Parth. I hope you are doing well.";
console.log(employee.length);//57

//Retrieving a specific string character -
console.log(employee[10]);//e

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

//Changing case -
let str1 = "Working at Thinkbridge";
console.log(str1.toLocaleLowerCase());
console.log(str1.toUpperCase());
//working at thinkbridge
//WORKING AT THINKBRIDGE

//Updating parts of a string -
let manifest = "Intern as a thinker at thinkbridge";
console.log(manifest.replace("Intern","Placed"));

/*------------------Conditionals------------------*/

//if...else statements -
let score = 200;
if(score>170){
    console.log("Selected at thinkbridge");
}
else{
    console.log("Better Luck next time.Keep Hustling");
}
//Selected at thinkbridge

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

//Logical operators: AND, OR and NOT -
// Logical AND (&&) 
let number = 45;
console.log(number >= 1 && number <= 100);//true
// Logical OR (||) 
console.log(number < 1 || number > 100);// false 
// Logical NOT (!) 
let isEven = number % 2 === 0;
console.log(!isEven);// true 

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

/*------------------Loops------------------*/

//The standard for loop
let Animals = ["Leopard", "Jaguar", "Tiger","Lion","Cow","Deer"];

for (let i = 0; i < Animals.length; i++) {
  console.log(Animals[i]);
}

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





































