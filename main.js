
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

const mapOlder25 = gente.map((user) => {
    if (user.edad > 25) {
        return user;
    }; 
});
console.log(mapOlder25);

const mapWithJ = gente.map((user) => {
    if (user.nombre.startsWith("J")) {
        return user;
    };  
}); 
console.log(mapWithJ);

const numbers = [4, 5, 6, 7, 8, 9, 10];
const numbersElevados = numbers.map((number) => {
    return number**number
});
console.log(numbersElevados);


// 4 EJERCICIO FILTER

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersOdd = numbers2.filter(number => number%2 !== 0);
console.log(numbersOdd);

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];

const veganFood = foodList.filter(plato => plato.isVeggie === true).forEach(plato => {
    console.log(`Que rico ${plato.name} me voy a comer!`)
});


// 5 EJERCICIO REDUCE

const numeros = [39, 2, 4, 25, 62];
const resultMultiply = numeros.reduce((a, b) => a*b);
console.log(resultMultiply);


// EXTRA MAP 1

const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
  ];

const staffStrings = staff.map((person) => `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`);
console.log(staffStrings);

// EXTRA MAP 2

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodStrings = foodList2.map((food) => {
    if (food == "Pizza") {
        return `Como soy de Italia, amo comer ${food}`;
    } else if (food == "Ramen") {
        return `Como soy de Japón, amo comer ${food}`;
    } else if (food == "Paella") {
        return `Como soy de Valencia, amo comer ${food}`;
    } else {
        return `Aunque no como carne, el ${food} es sabroso`;
    };
});
console.log(foodStrings);

// EXTRA FILTER 

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
];

const expensiveInventory = inventory.filter(item => item.price>=300);
console.log(expensiveInventory);


// EXTRA REDUCE

const sentenceElements = [
    'Me',
    'llamo',
    'Álvaro',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const elementsUnited = sentenceElements.reduce((a, b) => a + " " + b);
console.log(elementsUnited);

