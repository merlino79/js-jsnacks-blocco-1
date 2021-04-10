//var primo_numero = parseInt(prompt("primo numero"));
//console.log(primo_numero)

//var secondo_numero = parseInt(prompt("secondo  numero"));
//console.log(secondo_numero)


// if (primo_numero === secondo_numero) {
//     console.log("siete uguali")
// } else if (primo_numero > secondo_numero) {
//     console.log("sei maggiore " + primo_numero)
// } else {
//     console.log("sei  minore " + primo_numero)
// }




//


var primo_numero = parseInt(prompt("primo  numero"));
var secondo_numero = parseInt(prompt("secondo  numero"));

if (primo_numero === secondo_numero) {
    console.log("i numeri sono uguali")


} else if (primo_numero > secondo_numero) {
    console.log("sei maggiore")
    document.getElementById("msg").innerHTML = "sei maggiore"
} else {
    console.log("primo numero è minore")
}