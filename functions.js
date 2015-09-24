// ==> Functions

// alert() 
// alert is function name
// () is used to invoke alert function
// 
var add = function(){
	return arguments[0] + arguments[1];
}

console.log(add(3, 6));

console.log(2, 4, 6, 8, 10);

// isNaN:

//isNaN('a') -- true

// isNaN(5) -- false


// undefined and null

// NaN
// isNaN('a')
// true
// isNaN(5)
// false
// NaN == NaN
// false
// undefined == null
// true
// typeof undefined
// "undefined"
// typeof null
// "object"
// undefined == false
// false
// !undefined
// true
// !null
// true
// !0
// true
// ''
// ""
// !NaN
// true

console.log(isNaN(5));