const {faker} = require('@faker-js/faker');
const express = require('express');
const app = express();
// class User {
//     constructor(){
//         this._id = User.length + 1;
//         this.firstName = faker.person.firstName();
//     }
// }
class User {
    constructor() {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        };
    }
}
// app.get('/api/users/new', (req, res) => {
//     res.status(200).json(new User())
// })
app.get("/api/users/new", (req, res) => {
    res.json(new User())
})
app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})
app.get("/api/user/company", (req, res) => {
    res.json({user: new User(), company: new Company()})
})
app.listen(8000, ()=> console.log('Listeando on port 8000'))
