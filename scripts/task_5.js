	// Задание № 5
console.log("");
console.log("Задание № 5");
console.log("");

function isEven(a) {
	if (a % 1 == 0) {
		if (a % 2 == 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return "Вы ввели не целое число!";
	}
};

console.log("Результат: ");
console.log(isEven(+prompt("Введите целое число: ")));