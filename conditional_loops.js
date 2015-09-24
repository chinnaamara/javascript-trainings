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

console.log(result('asd'));
console.log(result(102));

// while



