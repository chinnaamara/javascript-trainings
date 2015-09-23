// unary 
// binary
// ternary or conditional

//Unary Operators -- typeof, !
// minus is both binary and unary operaor

//Eg: 
// typeof a or typeof(a)
 var a = 10;
 var b = 'hello';
 console.log(typeof(a));
 console.log(typeof b);

 var bool = true;

 console.log(bool);
 console.log(!bool);

 // Binary operators:

 // + - * / % < > <= >= == === != !==
console.log(12 / 10); // --> 1 it will return quotent
console.log(12 % 10); // --> 2 it will return reminder


// Boolean Values:  true and false
	
var a = 5,
	b = 10; 

console.log(a > b);

var str1 = 'z',
	str2 = 'A';

// str1 < str2 //true
// str1 > str2 //false
// str1 >= str2 //false
// str1 <= str2 //true

//Ternary (Conditonal) Operator

//?:  // it takes 3 values and return one value

//syntax: expression ? stmt1 : stmt2; // if exp is true stmt1 will return else stmt2

console.log('ternary result: ', 2 < 3 ? 2 : 3);

console.log(false? 'stmt 1' : 'stmt2');

// ==> Logical operators:

// && || !

// && -- if first value is true it returns second
//     --  if first is false it return first value, will not check second value


// || -- if value is true it returns first, will not check second value

//  -- if first value is false it will return second

//  ! -- will return opposite


// !3
// false
// !true
// false
// !false
// true

// Short-Circuitet of Logical Operators

var a = 10 || 1;

var sum = 50;
console.log(sum/a);

// Automatic Type Convertion

// 12 * null --> 0

// '10' == 10 -- true
// '10' === 10 -- false

// === and !== will restrict automatic type converstion

// ==> expressions and statements

// a piece of code which returs a value is an expression

// statement is combinations of expressions

// statements will terminate expressions will not terminate

// ==> Variables
var _val = 'sdf'

var a = 12;

console.log(a * a);
var val;

Rules:
--> variable names are any strings except keywords like var if for etc..
--> variable names cannot start with digits
--> Digits can include in middle or at end
--> $ and _ can include at start of variabe name










