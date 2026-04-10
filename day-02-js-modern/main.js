const alumnos = ["kevin", "jose", "sara", "oscar"];
const personas = {
    nombre: "Kevin",
    apellido: "Escobar",
    edad: 29,
    signo: "piscis"
}
const firstName = alumnos[2]
const [,,sara] = alumnos
const {apellido} = personas
const signoPersona = personas.signo
console.log(signoPersona)
1 < 2 ? 
(
    (() => {
        let si = "si";
        console.log(si)
    })()
)
:
console.log("no");

(() => {
    console.log("Arrow")
})

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];     // [1, 2, 3, 4, 5]

const user = { name: 'Juan' };
const fullUser = { ...user, age: 25 };  // { name: 'Juan', age: 25 }

function suma(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}
suma(1, 2, 3, 4);  // 10

