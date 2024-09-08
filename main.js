// حساب المتسطيل 1

let Lenght=4;
let width=5;
let result= Lenght * width;
console.log("The area of the rectangle is:"+result)




// 2-محول درجة الحرارى
let  c = 40;
let feh =  (c * 9/5)+32
console.log(c+'C is'+feh+"F");


//3- من ساعه  الى ثانيه 

let houre =2;
let second = houre*3600

console.log(houre+" hours =" +second+ "Seconds")




//4-Concatenation

let thingOne = "demah";
let thingTwo= "is the best";
let conct = thingOne.concat(" ",thingTwo )
console.log(conct)



//5-Total bill

var bill= 10.25 + 3.99 + 7.15;
var tip = bill* 0.15;
var total= bill + tip;

console.log("bill is "+bill+" tip is"+tip+" the total is "+total);




//6 Mad Libs

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
console.log('The Intro to JavaScript course is '+adjective1+'. James and Julia are so '+adjective1+' I cannot wait to work through the rest of this'+ adjective3+' content!');


//7-Awesome Message

// /*
//  * REQUIREMENTS
//  * 1. Create the following variables:
//  *     - firstName
//  *     - interest
//  *     - hobby
//  *
//  * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
//  *
//  * 3. The `awesomeMessage` variable should have the correct format, as shown below:
//  * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
//  *
//  * 4. Print `awesomeMessage` variable to the console using log() method
//  */
 
//  /*
//  * Example:
//  * - Assuming, firstName would have been assigned to "Julia",
//  *   interest to "cats", and hobby to "play video games" to produce the following message:
//  * 
//  *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
//  *
//  * - Be sure to include spaces and periods where necessary!
let firstName= "Rana";
let interest= "food";
let hobby= "play games";

let  awesomeMessage = "Hi, my name is "+firstName+"  . I love "+interest+". In my spare time, I like to " +hobby+".";
  console.log(awesomeMessage);
 