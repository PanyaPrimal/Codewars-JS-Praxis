gamesArr = ["1:2","2:2","3:4","4:3","2:2","3:3","5:4","3:3","4:4","1:4"];

function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
        
        let x = games[i].charAt(0);
        let y = games[i].charAt(2);
        
        if (x > y) {
            points = points + 3;
        } else if (x == y ){
            points = points + 1;
        }

    }
return points;
}

  points(gamesArr);
 

/** 
 * 
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