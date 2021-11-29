"use strict"
let startPrice = 1.10;
let finishPrice = 0.40;
let startKm = 10;
let finishKm = 90;
let sum = 0;
let lastKm;
let lastPrice;
let result = 5;
function price() {
	let km = prompt("Введите расстояние", "");
	let ost = km % 10;
	let okr = km - ost;
	if ( km >= finishKm ) {
		lastKm = km - finishKm;
		lastPrice = finishPrice;
	} else if (km <= startKm) {
		lastKm = 0;
		lastPrice = 0;
	} else {
		lastKm = ost;
		lastPrice = (startPrice - (okr - startKm) / 100);
	}
	for(let i = startKm; i < okr ; i += 10 ) {
		if (i === finishKm) {
			break;
		}
		sum += 10 * (startPrice - (i - startKm) / 100);
	}
	result += sum + lastPrice * lastKm;
	// console.log(`${sum}, ${lastKm}, ${lastPrice}, ${result}`);
	// console.log(typeof result);
	alert(`При введённом расстоянии в ${km} км цена за доставку будет равна ${result.toFixed(2)} рублей`);
}
price();