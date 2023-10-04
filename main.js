
// 1 EJERCICIO ARROW

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

// 2 EJERCICIO FOREACH

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

const older25 = [];
gente.forEach(user => {
    if(user.edad > 25) {
        older25.push(user);
    }
});
console.log(older25);

const startsWithJ = [];
gente.forEach (user => {
    if (user.nombre.startsWith("J")) {
    startsWithJ.push(user)
    }
});
console.log(startsWithJ);

    // OPTION 2
    // const startsWithJ = [];
    // gente.forEach (user => {
    //     if (user.nombre[0] === 'J') {
    //     startsWithJ.push(user)
    //     }
    // });
    // console.log(startsWithJ);


// 3 EJERCICIO MAP
const mapOlder25 = gente.map() 





