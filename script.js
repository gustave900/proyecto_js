// Creación de un objeto con los signos zodiacales y sus fechas
const zodiaco = {
    "aries": {diaInicio: 21, mesInicio: 3, diaFin: 19, mesFin: 4},
    "tauro": {diaInicio: 20, mesInicio: 4, diaFin: 20, mesFin: 5},
    "geminis": {diaInicio: 21, mesInicio: 5, diaFin: 20, mesFin: 6},
    "cancer": {diaInicio: 21, mesInicio: 6, diaFin: 22, mesFin: 7},
    "leo": {diaInicio: 23, mesInicio: 7, diaFin: 22, mesFin: 8},
    "virgo": {diaInicio: 23, mesInicio: 8, diaFin: 22, mesFin: 9},
    "libra": {diaInicio: 23, mesInicio: 9, diaFin: 22, mesFin: 10},
    "escorpio": {diaInicio: 23, mesInicio: 10, diaFin: 21, mesFin: 11},
    "sagitario": {diaInicio: 22, mesInicio: 11, diaFin: 21, mesFin: 12},
    "capricornio": {diaInicio: 22, mesInicio: 12, diaFin: 19, mesFin: 1},
    "acuario": {diaInicio: 20, mesInicio: 1, diaFin: 18, mesFin: 2},
    "piscis": {diaInicio: 19, mesInicio: 2, diaFin: 20, mesFin: 3}
}

// Creación de una función para obtener el signo zodiacal a partir de la fecha de nacimiento
function obtenerSigno(dia, mes) {
    for (const signo in zodiaco) {
        if (zodiaco[signo].mesInicio == mes && dia >= zodiaco[signo].diaInicio || zodiaco[signo].mesFin == mes && dia <= zodiaco[signo].diaFin) {
        return signo
        }
    }
}

// Pedir al usuario que ingrese su fecha de nacimiento
let diaNacimiento = prompt("Ingrese su día de nacimiento:")
console.log(diaNacimiento)
let mesNacimiento = prompt("Ingrese su mes de nacimiento:")
console.log(mesNacimiento)
  
// Llamar a la función y almacenar el resultado en una variable
let signo = obtenerSigno(diaNacimiento, mesNacimiento)
console.log(signo)
  
// Mostrar el resultado en un alert
alert("Tu signo zodiacal es " + signo)
console.log("Tu signo zodiacal es " + signo)