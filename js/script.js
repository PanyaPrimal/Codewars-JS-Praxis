a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    console.log(Array.from(new Set(s1 + s2)).sort().join());
}

  longest(a,b);

/** 
 ____________________________________________________

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