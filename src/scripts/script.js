let a = 10
let b = 57
let nombre = "El juan"
let edad = 20
let esEstudiante = true
console.log("\nNombre",nombre)
console.log("\nEdad",edad)
console.log("\n¿Es un estudiante?: ",esEstudiante)

nombre = "El leo"
edad = 28
esEstudiante = false
console.log("\nNombre",nombre)
console.log("\nEdad",edad)
console.log("\n¿Es un estudiante?: ",esEstudiante)

function sumar (a,b){
return a+b
}
function restar (a,b){
return a-b
}
function multiplicar (a,b){
    alert(a*b) 
}
function dividir (a,b){
return a/b
}
console.log(sumar(a,b),restar(a,b),multiplicar(a,b),dividir(a,b))
//Comparaciones
console.log("a es igual a b:", a==b)
console.log("a es diferente a b:", a!=b)
console.log("a es menor o igual a b:", a<=b)
console.log("a es mayor o igual a b:", a>=b)

//Comparadores lógicos y concatenación de strings
let esMayorDeEdad = true
let tieneLicencia = false
let puedeConducir = (esMayorDeEdad&&tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)
PuedeConducir = (esMayorDeEdad||tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)

esMayorDeEdad = false
tieneLicencia = false
puedeConducir = (esMayorDeEdad&&tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)
PuedeConducir = (esMayorDeEdad||tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)

esMayorDeEdad = true
tieneLicencia = true
puedeConducir = (esMayorDeEdad&&tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)
PuedeConducir = (esMayorDeEdad||tieneLicencia)
console.log("Puede conducir sin licencia?: ", puedeConducir)


console.log("Hola, "+nombre+"!")
if(edad>=18){
console.log("Eres mayor de edad.")
}else{
console.log("Eres menor de edad.")}
if(estud==true){console.log("Tiene un descuento por ser estudiante!")}else{console.log("No tienes descuento.")}