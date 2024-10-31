
function mostrarMensaje() {
    document.getElementById("mensaje").innerText = "¡Hola! Este es un mensaje desde JavaScript.";
}

function calcular(operacion, event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            document.getElementById("mensaje").innerText = "La suma es: " + resultado;
            break;
        case 'restar':
            resultado = num1 - num2;
            document.getElementById("mensaje").innerText = "La resta es: " + resultado;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            document.getElementById("mensaje").innerText = "La multiplicación es: " + resultado;
            break;
        case 'dividir':
            resultado = num1 / num2;
            document.getElementById("mensaje").innerText = "La división es: " + resultado;
            break;
        case 'comparar':
            if(num1 > num2){document.getElementById("mensaje").innerText = "El primer número es mayor.";}
            else if(num2 > num1){document.getElementById("mensaje").innerText = "El primer número es menor.";}
            else if(num1 == num2){document.getElementById("mensaje").innerText = "Son iguales.";}
            
            break;
        default:
            document.getElementById("mensaje").innerText = "Operación no válida.";
    }
}

function validarConductor(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let esMayorDeEdad = document.getElementById("esMayorDeEdad").value.toLowerCase() == 'si';
    let tieneLicencia = document.getElementById("tieneLicencia").value.toLowerCase() == 'si';

    document.getElementById("saludo").innerText = "Hola, "+nombre+"!";
    if(esMayorDeEdad == true){document.getElementById("mensaje2").innerText = "Eres mayor de edad.";}else{document.getElementById("mensaje2").innerText = "¡No eres mayor de edad!";}
    if(tieneLicencia == true){document.getElementById("mensaje3").innerText = "Tienes licencia de conducir.";}else{document.getElementById("mensaje3").innerText = "¡No tienes licencia de conducir!";}
    }