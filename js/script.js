

/**
31.

Sol:

_____________________________________________________
31.

Sol:

_____________________________________________________
31.

Sol:

_____________________________________________________
31.

Sol:

_____________________________________________________

31.The goal of this exercise is to convert a string to a new string where
 each character in the new string is "(" if that character appears only 
 once in the original string, or ")" if that character appears more than 
 once in the original string. Ignore capitalization when determining if a 
 character is a duplicate.
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Sol:
function duplicateEncode(word){
    let str = word.toLowerCase();
    let unique = '';
    for (let i =0; i < word.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            unique += '(';
        }
        else {
            unique += ')';
        }
    }
    console.log(unique);
}

duplicateEncode('CrAAppppmaaan');
_____________________________________________________
31.In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.

Sol:

function testEven(n) {
    console.log(n%2 ? false : true)
}

testEven(9);
_____________________________________________________

 
30.Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Sol:
function getDivisorsCnt(n){
    let counter = 0;

    for(let i = 0; i <= n; i++) {
        if(n % i == 0){
            counter++
        }
    }
    console.log(counter);

}

getDivisorsCnt(30);

_____________________________________________________
29.Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Sol:

const solution = (str, ending) => str.endsWith(ending)

console.log(solution('abc', 'bc'));

_____________________________________________________
28.Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Sol:
const expressionMatter = (a,b,c) => [a*(b+c),a*b*c,a+b*c,(a+b)*c,a+b+c,a*b+c].sort((x,y) => x-y).reverse()[0];
\
const expressionMatter = (a,b,c) => Math.max(a*(b+c),a*b*c,a+b*c,(a+b)*c,a+b+c,a*b+c);

console.log(expressionMatter(1,2,3));
_____________________________________________________

27.Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of
completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

Sol:
function finalGrade (exam, projects) {
   
    if(exam > 90 || projects > 10){console.log(100)}
    else if(exam > 75 && projects >= 5){console.log(90)}
    else if(exam > 50 && projects >= 2){console.log(75)}
    else console.log(0);
}

finalGrade(60,5)
/
const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? console.log(100) : 
exam > 75 && projects >= 5 ? console.log(90) : 
exam > 50 && projects >= 2 ? console.log(75) : 
0;


_____________________________________________________
26.I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

Sol:
var humanYearsCatYearsDogYears = function(humanYears) {
    const firstYear = 15;
    const secondYear = 9;
    const catYears = 4;
    const dogYears = 5;


    if(humanYears == 1){console.log([humanYears,firstYear,firstYear])}
    else if(humanYears == 2){console.log([humanYears,firstYear+secondYear,firstYear+secondYear])}
    else if(humanYears > 2){console.log([humanYears,firstYear+secondYear+(humanYears-2)*catYears,firstYear+secondYear+(humanYears-2)*dogYears])};
}

humanYearsCatYearsDogYears(10);

//
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];


_____________________________________________________

25. You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Sol:
let arr = [17, 17, 3, 17, 17, 17, 17];
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){console.log(numbers[i])}
    }
  }
  
stray(arr);
_____________________________________________________
24.Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding 
countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you 
already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you 
have it in your database. It should default to English if the language is not in the database, or in the event of 
an invalid input.

Sol:
let GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}
function greet(language) {

    return GreetingsDB[language] || "Welcome";
}
greet(flemish);
_____________________________________________________
23.Take an array and remove every second element from the array. Always keep the first element and start 
removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!

Sol:
function removeEveryOther(arr){
    console.log(arr.filter(function(elem, index) {
      return index % 2 === 0;
    }));
}
let arr = [1,2,3,4,5,6,7,8,9,10];
removeEveryOther(arr);
_________________________________________________________
22. Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

Sol:

function countBy(x, n) {
    let z = [];

    for (let i = 0; i < n; i++) {
        z.unshift(n*x-x*i)
     }
    console.log('result', z);
}
countBy(4,15);

_________________________________________________________
21. In this simple exercise, you will create a program that will take two lists of integers, 
a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of 
cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is 
bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the 
volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.

Sol:
function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b))-(b.reduce((a,b)=>a*b));
}
_________________________________________________________
20. Given an array of integers as strings and numbers, return the sum of the array values as if all 
were numbers.

Return your answer as a number.

Sol:
function sumMix(x){
    let arr = [];
    for (let i = 0; i < x.length; i++) {
       arr.push(Number.parseInt(x[i]));
    }
    console.log(arr.reduce((a,b)=>a+b));
//return x.map(a => +a).reduce((a, b) => a + b);
}
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
_________________________________________________________
19. Very simple, given an integer or a floating-point number, find its opposite.

Examples:
1: -1
-34: 34
Sol:
function opposite(number) {
  return -number;
}
_________________________________________________________
_________________________________________________________
18.Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element 
is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].
Sol:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
countPositivesSumNegatives(arr);

_________________________________________________________
17.Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off 
your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

Sol:
function rentalCarCost(d) {
    let dayOfrent = 40;
    let threeDaysOff = 20;
    let sevenDaysOff = 50;

    let totalAmount = d*dayOfrent;
    if (3 <= d && d < 7) {
        return totalAmount - threeDaysOff;
    } else if (d >= 7) {
        return totalAmount - sevenDaysOff;
    } else {
        return totalAmount;
    }
// return result = (3 <= d && d < 7) ? d*40-20 : (d >= 7) ? d*40-50 : d*40;
}
_________________________________________________________
16.
Ben has a very simple idea to make some profit: he buys something and sells it again. Of 
course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same 
price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]

Sol:
let test = [1,2,3,4,5];
function minMax(arr){
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)]; 
    // return [Math.min(...arr), Math.max(...arr)];
  }

minMax(test);
_________________________________________________________
15. Code as fast as you can! You need to double the integer and 
return it.

Sol:
function doubleInteger(i) {
  return i*2;
}
_________________________________________________________
14. Complete the square sum function so that it squares each number passed into it and then sums 
the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


Sol:
let test1 = [1,2];
let test2 = [0, 3, 4, 5];

function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
        return (n*n) + sum;
      }, 0);
}

_________________________________________________________
13. 
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is 
divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true


Sol:    
function isDivideBy(number, a, b) {
    if (Number.isInteger(number / a) && Number.isInteger(number / b)) {
        return true;
    } else {
        return false;
    }
}
_________________________________________________________
12.You were camping with your friends far away from home, but when it's time to go back, you 
realize that your fuel is running out and the nearest pump is 50 miles away! You know that on 
average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these 
factors, write a function that tells you if it is possible to get to the pump or not. Function 
should return true if it is possible and false if not. The input 
values are always positive.

Sol:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    console.log(mpg*fuelLeft-distanceToPump >= 0 ? true : false);
};
zeroFuel(50,25,2)
zeroFuel(100, 50, 1)
_________________________________________________________
11.Given a non-empty array of integers, return the result of multiplying the values together in 
order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Sol:
let test = [1, 2, 3, 4];
function grow(x) {
   console.log(x.reduce((a, b) => a * b));
}
grow(test);
_________________________________________________________
10.Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

Sol:
function removeExclamationMarks(s) {
    console.log(s.replace(/!/g, ''));
  }
let test = "Hello World!";
removeExclamationMarks(test);
_________________________________________________________
9.This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

Sol:
function simpleMultiplication(number) {
    number%2 == 1 ? console.log(test*9) : console.log(test*8);
}
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
let test = 5;
simpleMultiplication(test);
_________________________________________________________
8.Given two integers a and b, which can be positive or negative, find the sum of all the integers between 
and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

Sol:
let test = (-1, 2);
function GetSum( a,b ){
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
_________________________________________________________
7.Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of
an integral number.

Sol:
var stringToNumber = function(str){
    return +str;
}

var stringToNumber = function(str){
  return parseInt(str);
}

_________________________________________________________

6. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative 
or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Sol:
function sum (numbers) {
    console.log(numbers.reduce((a, b) => a + b, 0));
};
let test = [1, 5.2, 4, 0, -1];
sum(test);
_________________________________________________________
5.Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the 
string should be retained.

Examples
"This is  an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Sol:
function reverseWords(str) {
    let result = str.split(' ').reverse().join(' ').split('').reverse().join('');
    console.log(result)
  }
  let test = "This is  an example!";
  reverseWords(test);
_________________________________________________________
4. 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a 
string. You're given one parameter, the original string. You don't have to worry with strings with less than two 
characters.

Sol:
function removeChar(str){
    return str.slice(1, -1)
  };
_________________________________________________________
3. Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever 
you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under 
which you need to set an alarm). It should return false otherwise. Examples:

Sol:

function setAlarm(employed, vacation){
    if (employed == true && vacation == false) {
        console.log(true);
      } else {
        console.log(false);
      }
}

setAlarm(true, true);


_________________________________________________________
2. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns 
it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
Sol: 
function cockroachSpeed(s) {
    return s * 100000 / (60 * 60)
}


cockroachSpeed(1.08);
_________________________________________________________
1. Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value 
associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

Sol:

function getGrade (s1, s2, s3) {
    let s = (s1 + s2 + s3)/3;
    console.log(s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F') 
  }


getGrade(75,100,79);
_________________________________________________________
Complete the solution so that the function will break up camel casing, using a 
space between words.
Sol:
let test = 'camelCasingTest';

function solution(string) {
   console.log(string.replace(/([A-Z])/g, ' $1'));
}

solution(test);

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

_________________________________________________________
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
    sol:
let faces = [':D',':~)',';~D',':)',':O',':;']; //4
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
countSmileys(faces);
_________________________________________________________
Write a function called repeatStr which repeats the given string string exactly 
n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
Sol:
function repeatStr (n, s) {
    
    console.log(s.repeat(n));
  }

  repeatStr(5, "I");
_________________________________________________________
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase 
and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
Sol: 
let test1 = "aabBcdeIndivisibilitiessaaawWW";
function duplicateCount(text){
    let text1 = text.toLowerCase().split('').filter(function(val, i, arr){
        return arr.indexOf(val) !==i && arr.lastIndexOf(val) === i;
    }).length;
    console.log(text1);
  }

  duplicateCount(test1);
_________________________________________________________
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in 
the original string.

All letters will be lowercase and all inputs will be valid.
Sol: 
let str = 'a b mannnoooo i need a taxi up to ubud z zz';

function high(x){
    let as = x.split(' ').map(x=>[...x].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    console.log(x.split(' ')[as.indexOf(Math.max(...as))]);
}
high(str);
_________________________________________________________
You will be given an array a and a value x. All you need to do is check
 whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

Sol:
function check(a, x) {
    return a.includes(x);
}

_________________________________________________________
You will be given an array of numbers. You have to sort the odd numbers 
in ascending order while leaving the even numbers at their original 
positions.

Sol: 
let a = [5, 8, 6, 3, 4];

function sortArray(array) {
    let evenArr = [];
    let oddArr = [];
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i]%2 === 0){
            evenArr.push(array[i]);
        } else {
            oddArr.push(array[i]);
        }
    }
    oddArr.sort((a , b) => a - b);
    for (let i = 0; i < array.length; i ++) {
        if (array[i]%2 === 0) {
            result.push(evenArr.shift());
        } else {
            result.push(oddArr.shift());
        } 
    }
    console.log(result);
}

sortArray(a);

function sortArray(array) {
    let odd = array.filter((x)=>x%2).sort((a,b)=>a-b);
    return array.map((x)=>x%2 ? odd.shift : x); 
}
_________________________________________________________
There is a bus moving in the city, and it takes and drop some people in 
each bus stop.

You are provided with a list (or array) of integer pairs. Elements of 
each pair represent number of people get into bus (The first item) and 
number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after 
the last bus station (after the last array). Even though it is the last 
bus stop, the bus is not empty and some people are still in the bus, and 
they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people 
in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty 
in the first bus stop.

Sol:
let busStops = [[10,0],[3,5],[5,8]];


function getNumber(stops){
    let totapPeople = 0;
    for (let i = 0; i < stops.length; i++) {
        totapPeople += stops[i][0];
        totapPeople -= stops[i][1];
    }
     console.log(totapPeople);
  }

  getNumber(busStops);

_________________________________________________________
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the same 
multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, 
regardless of the order.

Sol: 
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2){
    if (array1 !==null & array2 !== null && array1.length == array2.length) {
        array1.sort((a, b) => a - b); array2.sort((a,b) => a - b);
        return array1.map(v => v * v).every((v, i) => v == array2[i]);
    } return false;
}

comp(a, b);

_________________________________________________________
Complete the method that takes a boolean value and return a "Yes" 
string for true, or a "No" string for false.

Sol:
function boolToWord( bool ){
    return bool ? "Yes" : "No"
  }
__________________________________________________________
Our football team finished the championship. The result of each
match look like "x:y". Results of all matches are recorded in the 
collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of
our team in the championship. Rules for counting points for each
match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point

Sol: 

gamesArr = ["1:2","2:2","3:4","4:3","2:2","3:3","5:4","3:3","4:4","1:4"];

function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
        
        let x = games[i][0];
        let y = games[i][2];
        
        if (x > y) {
            points = points + 3;
        } else if (x == y ){
            points = points + 1;
        }

    }
console.log(points);
}

  points(gamesArr);
 

__________________________________________________________
 * 
 * In a factory a printer prints labels for boxes. For one kind 
 * of boxes the printer has to use colors which, for the sake of
 *  simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning
 that the printer used three times color a, four times color b, one
  time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction
 and a "bad" control string is produced e.g. 
aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string
 will return the error rate of the printer as a string representing
  a rational whose numerator is the number of errors and the denominator the length
   of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only
 letters from ato z.

 Sol:

let a = "aaaaaaaaaaaaaaaabbbbbxvciubbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    console.log(count+"/"+s.length);
}

printerError(a);
_____
const printerError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;

    console.log(printerError(s));



 * __________________________________________________________

 *

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. 
All input is guaranteed to be valid, i.e. each input string will only ever consist 
of 'G', 'C', 'A' and/or 'T'.

Sol:

let someDna = "TGACCGTCCGCC";

function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}
  DNAtoRNA(someDna);

__________________________________________________________

Your task is to convert strings to how they would be written 
by Jaden Smith. The strings are actual quotes from Jaden Smith, 
but they are not capitalized in the same way he originally typed them.

Sol:

let Jaden = "How can mirrors be real if our eyes aren't real";

function toJadenCase(str) {
    console.log(str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' '));
};


toJadenCase(Jaden);


__________________________________________________________
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"

Sol:

function numberToString(num) {
  return num.toString();
}
__________________________________________________________

Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing
distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Sol:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    console.log(Array.from(new Set(s1 + s2)).sort().join());
}

longest(a,b);

___________________________________________________

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better
than the average student in your class.

You receive an array with your peers' test scores. Now calculate
the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points.
 For calculating the average point you may add your point to the given array!

([100, 40, 34, 57, 29, 72, 57, 88], 75)

Sol:


let clas = [100, 40, 34, 57, 29, 72, 57, 88];
let points = 75;

function betterThanAverage(classPoints, yourPoints) {
    console.log(yourPoints > (classPoints.reduce((a, b) => a + b)
     / classPoints.length) ? true : false); 
  }
  
betterThanAverage(clas, points);
_______________________________________________
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers
in the nth row of this triangle
(starting at index 1) e.g.: (Input --> Output)


function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}  

Very strange solution from codewars....
_________________________________________________

**/