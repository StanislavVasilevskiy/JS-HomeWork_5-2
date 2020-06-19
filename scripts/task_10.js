	// Задание № 10
console.log("");
console.log("Задание № 10");
console.log("");

let i = 0;

function arr10(x) {
	console.log(x[i]);
	i++;
	if (i < x.length) {
		arr10(x);
	};
};

arr10([1, 2, 3, 4, 5, 6, 7, 8]);