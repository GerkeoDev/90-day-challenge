const express = require('express');
const app = express();
const port=8000;
app.use( express.json());
app.use( express.urlencoded({ extended: true }));


let users = [
  {firstName: "Reola", lastName: "Haruken"},
  {firstName: "Goku", lastName: "Ramirez"},
  {firstName: "Naruto", lastName: "Shipuden"},
  {firstName: "Nezuko", lastName: "Yoricho"},
  {firstName: "Oscar", lastName: "Gonzalez"},
  {firstName: "Anonymus", lastName: "Smith"}
];
app.get('/api/hello', (req, res) => {
    res.json({message: "Hello World"});
});
app.get('/api/users/', (req, res) => {
    res.json(users);
});
app.post('/api/hello', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});
app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    // users[id] ? res.json(users[id]) : res.json({message: "User not found"});
    if(users[id]){
        users[id] = req.body;
        res.json({message: "User updated", users: users[id]});
        console.log(users);
    } else {
        res.json({message: "User not found"});
    }
});
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    if(users[id]){
        const removed = users.splice(id, 1);
        console.log(removed);
        res.json({status: 200, message: "User deleted", users: removed});
    } else {
        res.json({status: 404, message: "User not found"});
    }
});


const server = app.listen(port, () => {
    console.log(`Server is locked and loaded on port ${port}!`)
});