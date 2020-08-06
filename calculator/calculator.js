function add () {
	let x=1;
	let y =10;
	let sum =x+y;
	return sum;
}

function subtract () {
	let x=100;
	let y =10;
	let minus =x-y;
	return minus;
}

function sum () {
	let x=1;
	let y =10;
	let result =x+y;
	return result;
}

function multiply () {
	let x=1;
	let y =10
	let mult =x*y;
	return mult;
}

function power() {
	let a=10;
	let b=2;
	let res=Math.pow(a,b);
	return res;
	
}

function factorial() {
	 let ans=1;
	let n=0;
            for (var i = 2; i <= n; i++) 
                ans = ans * i; 
            return ans; 
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
