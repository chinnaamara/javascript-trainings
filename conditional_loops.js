// if
// else
// while
// do
// for
// switch

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
	console.log('/ evens_for');
	for(i = 2; i <= range; i = i + 2) {
		console.log(i);
	}
};

evens_for(20);







