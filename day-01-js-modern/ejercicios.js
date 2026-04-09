const [primero, segundo] = [10, 20]
console.log(primero, segundo)

const {nombre, edad} = {
    nombre: "Perlita",
    edad: 16
}
console.log(nombre, edad)

function saludar({nombre, edad}){
    console.log(`Hola ${nombre}, tenes ${edad} años`)
}
saludar({nombre: "Pedro", edad: 25})

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]

console.log(arr2)


function suma(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(suma(1,2,3,4))
