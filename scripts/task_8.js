	// Задание № 8
console.log("");
console.log("Задание № 8");
console.log("");

function fib(x) {
	let a = 0,
		b = 1,
		arr = [];

	for (i = 0; i <= x; i++) {
		arr.push(a);

		let c = a + b;

		a = b;
		b = c;

		if (arr[i] >= 1000) {
			break;
		}
	};

	return arr;
};

console.log(fib(1000));