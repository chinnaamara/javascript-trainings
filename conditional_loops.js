//conditional statements
// if  
// else
// switch

//conditional loops
// while 
// do 
// for 


//if

// if (condition) { // conditin is true it will execute otherwise skip it
// 	// stmts;
// }

var square = function(num){
	if(!isNaN(num)){
		return num * num;	
	} else {
		return 'cannot perform square on strings';
	}
};

// console.log(square('a'));

// console.log(square(4));

// Nested if-else

var result = function(marks){
		if(!isNaN(marks)){
				if(marks < 35) {
						return 'fail';
				} else if(marks < 70) {
						return 'pass';
				} else if(marks > 100) {
						return 'marks out of 100 only'
				} else {
						return 'distinction';
				}	
		} else {
			return 'unknown value'
		}		
};

//console.log(result('asd'));
//console.log(result(102));

// while

// while(expression) {

// }

var evens = function(range){
	var num = 2;
	while(num <= range) {
		console.log(num);
		num = num + 2;
	}
};

var odds = function(range){
	var num = 1;
	while(num <= range) {
		console.log(num);
		num = num + 2;
	}
};

evens(20);

// odds(10);

// do

// do{
// 	// statements
// }(expression?)

var evens = function(range){
	var num = 2;
	do {
		console.log(num);
		num = num + 2;
	} while (num <= range)
};

//evens(0);

// for

// for(initialization; expression?; increment/decrement){
// 	statements;
// }

var evens_for = function(range){
	for(i = 2; i <= range; i = i + 2) {
		console.log(i);
	}
};

evens_for(20);

var max = function(a, b){
	if (a > b) {
		return a;
	} else { 
		return b;
	}
}

var max2 = function(a, b){
	return a > b ? a : b;
}
console.log(max2(50, 12));

var max3 = function(a, b, c){
	if(a > b && a > c) {
		return a;
	} else if(b > c){
		return b;
	} else { 
		return c;
	}
};

var max_three = function(a, b, c){
	return max2(a, b) > c ? max2(a, b) : c;
}

console.log(max_three(40, 80, 90));


