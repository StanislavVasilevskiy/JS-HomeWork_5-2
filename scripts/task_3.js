	// Задание № 3
console.log("");
console.log("Задание № 3");
console.log("");

function minMax(a, b) {
	
	if (a < b) {
		return ["Минимальное число: " + a, "Максимальное число: " + b];
	} else {
		return ["Минимальное число: " + b, "Максимальное число: " + a];
	}
}

console.log(minMax(7, 5).join("\n"))
