
// EJERCICIO 1

const saludar = () => "Hola";
console.log(saludar());

const division = (a, b) => a / b;
console.log(division(20, 10));

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Carlos"));
console.log(miNombre("Francesc"));

const test2 = () => console.log("Función test 2 ejecutada.");
const test1 = (callback) => callback();
test1(test2);

//EJERCICIO 2
