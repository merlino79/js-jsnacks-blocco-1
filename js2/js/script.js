var prima_parola = prompt("prima parola");
var seconda_parola = prompt("seconda parola");

console.log(prima_parola.length)
console.log(seconda_parola.length)

if (prima_parola === seconda_parola) {
    console.log("siete uguali");
} else if (prima_parola < seconda_parola) {
    console.log("prima parola")
} else {
    console.log("seconda parola")
}