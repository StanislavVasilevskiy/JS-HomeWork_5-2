	// Задание № 9
console.log("");
console.log("Задание № 9");
console.log("");

function number(x) {
	let summa = 0,
		num = String(x);

	for (i = 0; i < num.length; i++) {
		summa += +num[i];
	};

	num = String(summa);

	if (summa > 9) {
		number(summa);
	} else {
		console.log(num);
	};
};

console.log(number(+prompt("Введите число для 9 задания")));