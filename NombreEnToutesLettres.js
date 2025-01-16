
function num2Letters(n) {
	if (isNaN(n) || n < -9999 || 9999 < n) {
		return 'Veuillez entrer un nombre entier compris entre -9999 et 9999.';
	}
	
	if(n < 0)
		var number = n * -1;
	else
		var number = n; 
	
	
	
	var units2Letters = ['', 'un', 'deux', 'trois', 'quatre',
						'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze',
						'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit',
						'dix-neuf'],
		tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante',
						'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
	var units = number % 10,
	tens = (number % 100 - units) / 10,
	hundreds = (number % 1000 - number % 100) / 100,
	thousands = (number % 10000 - number % 1000) / 1000;
	var unitsOut, tensOut, hundredsOut,thousandsOut;
	
	if (number === 0) {
		return 'zéro';
	} else {
		// Traitement des unités
		unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];
		// Traitement des dizaines
		if (tens === 1 && units > 0) {
			tensOut = units2Letters[10 + units];// de 10 a 19
			unitsOut = '';
		} else if (tens === 7 || tens === 9) {
			tensOut = tens2Letters[tens] +''+ (tens === 7 && units === 1 ? ' et ' : '-') + units2Letters[10 + units];// 70+ et 90+
			unitsOut = '';
		} else {
			tensOut = tens2Letters[tens];// pour le reste
		}
		tensOut += (units === 0 && tens === 8 ? 's' : '');//ajout de 's' pour 80
		// Traitement des centaines
		hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + ' ' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');
		// Traitement des milliers
		thousandsOut = (thousands > 1 ? units2Letters[thousands] + ' ' : '') + (thousands > 0 ? 'mille' : '') + (thousands > 1 && hundreds == 0 && tens == 0 && units == 0 ? 's' : '');
		
		// Retour du total
		if(n < 0)
			return 'Moins ' +thousandsOut + (thousandsOut && hundredsOut ? '-' : ' ') + hundredsOut + (hundredsOut && tensOut ? ' ': ' ') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-': '') + unitsOut;
		else
			return thousandsOut + (thousandsOut && hundredsOut ? ' ' : '') + hundredsOut + (hundredsOut && tensOut ? ' ': ' ') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-': '') + unitsOut;
	
	}
}


function convertNumber() {
    var userEntry = document.getElementById("numberInput").value;
    var result = num2Letters(parseInt(userEntry, 10));
	console.log(result);
    document.getElementById("result").innerText = result;
}


// var userEntry;

// while (userEntry = prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 9999) :')) {
// 	alert(num2Letters(parseInt(userEntry, 10))); //10 is the radix parameter, indicating that the string 
// 	// should be interpreted as a decimal number. This parameter is optional, but it's a good 
// 	// practice to include it to avoid unexpected behavior
// }
