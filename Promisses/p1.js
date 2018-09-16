
// let name = 'Slavo';
let numbers = [1,2,3,4,5,6,7,8];

let check = new Promise(function(resolve) {
	let name = 'Slavo';
	if(name) {
		resolve()
	} else {
		console.log("Error");
	}
}
);

let count = function count(data){
         return data.length;
}

console.log(count(numbers));
console.log(check.then(function(){
	return numbers.length;
}));