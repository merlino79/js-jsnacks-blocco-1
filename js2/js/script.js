var prima_parola = prompt("prima parola");
var seconda_parola = prompt("seconda parola");

console.log(prima_parola.length)
console.log(seconda_parola.length)

if (prima_parola.length === seconda_parola.length) {
    console.log("siete uguali");
    alert("siete uguali")
} else if (prima_parola.length < seconda_parola.length) {
    console.log(prima_parola + "  " + seconda_parola)
} else {
    console.log(seconda_parola + " " + prima_parola)
}