let test = 'camelCasingTest';

function solution(string) {
   console.log(string.replace(/([A-Z])/g, ' $1'));
}

solution(test);



/** 
_________________________________________________________
Complete the solution so that the function will break up camel casing, using a 
space between words.
Sol:

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
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

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