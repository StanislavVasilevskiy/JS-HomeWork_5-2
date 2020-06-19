	// Задание № 4
console.log("");
console.log("Задание № 4");
console.log("");

function arrReturn(diapStart, diapEnd) {
	
	let arr = [];
	
	if (diapStart < diapEnd) {
		for (i = diapStart; i <= diapEnd; i++) {
			arr.push(i);
		}
		return arr;

	} else {
		for (i = diapStart; i >= diapEnd; i--) {
			arr.push(i);
		}
		return arr;
	};
};

function arrDisplay(array) {
	array = array || arrReturn(+prompt("Введите первое число диапозона массива", ""), +prompt("Введите последнее число диапозона массива", ""));
	return array;
};

console.log("Ваш массив: ");
console.log(arrDisplay());


//То же самое, но без функций

// let diapStart = +prompt("Введите первое число диапозона массива", ""),
// 	diapEnd = +prompt("Введите последнее число диапозона массива", ""),
// 	arr = [];

// if (diapStart < diapEnd) {
// 	for (i = diapStart; i <= diapEnd; i++) {
// 		arr.push(i);
// 	}

// } else {
// 	for (i = diapStart; i >= diapEnd; i--) {
// 		arr.push(i);
// 	}
// };

// console.log(arr);
