document.getElementById('convert').onclick = convert;

function convert() {
 var celsius = document.getElementById('celsius').value
 farheinheit = convertCelsiusToFarheinheit(celsius);
 if (farheinheit > 100) {
	document.getElementById('farheinheit').value = 'hooooot!!!';
} else {
	document.getElementById('farheinheit').value = farheinheit;
}

function convertCelsiusToFarheinheit(celsius) {
var farheinheit = 	9 / 5 * celsius + 32;
return farheinheit;
}
function convertCelsiusToFarheinheit(farheinheit) {
var celsius = 	9 / 5 * celsius + 32;
return celsius;
}