//Template literals
const city = "New York"
console.log(`Vivo en ${city}`)


//-------------------------------//
//Optional chaining ?.
const user = {
    name: "Steve",
    address: {
        city: "New York"
    }
}
console.log(user.address?.city)
//-------------------------------//


const product = {
    name: "Laptop"
}
console.log(product.brand?.toUpperCase())

//Nullish coalescing ??
const brand = product.brand?.toUpperCase() ?? "No brand"
console.log(brand)
const user1= {
    name: "Steve",
    age: null
}
const age = user1.age ?? "Edad no disponible"
console.log(age)