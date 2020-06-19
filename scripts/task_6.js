	// Задание № 6
console.log("");
console.log("Задание № 6");
console.log("");

function arrX(arrNums) {
	arrNums = arrNums || arrDisplay();
	console.log("Ваш массив: ");
	console.log(arrNums);
	
	let arrNew = [];
	for (i = 0; i < arrNums.length; i++) {
		if (isEven(arrNums[i]) == true) {
			arrNew.push(arrNums[i]);
		} else {
			continue;
		}
	};

	console.log("\nНовый массив: ");
	return arrNew;
};

console.log(arrX());