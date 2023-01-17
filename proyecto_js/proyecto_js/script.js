
let numero = prompt("Ingrese la mensualidad del primer mes del contrato")
let porcentaje = numero * 100

function calcularPorcentaje (numero, porcentaje) {
    return Math.abs (numero * 100 / porcentaje);
    
}

control.log(calcularPorcentaje(1000,15)); 