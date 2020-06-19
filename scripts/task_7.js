	// Задание № 7
console.log("");
console.log("Задание № 7");
console.log("");

function pir(count) {
	count = +prompt("Введите количество рядов в пирамиде");
	let arr = [];

	if (Number.isInteger(count)) {
		for (let i = 1; i <= count; i++) {
			for (let j = 0; j < i; j++) {
				arr.push(i);
			};

			let arr1 = arr.join("");
			arr = [];
			console.log(arr1);
		};
	} else {
		count = 9;
		for (let i = 1; i <= count; i++) {
			for (let j = 0; j < i; j++) {
				arr.push("*");
			};

			let arr1 = arr.join("");
			arr = [];
			console.log(arr1);
		};
	};
};

console.log(pir());