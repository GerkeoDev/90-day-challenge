const { User } = require('../models/user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

//Realmente no entiendo nada de esta parte
//En el login controller se van a manejar las funciones de registro, login, refresh y logout.
//En el register se va a crear un nuevo usuario, se va a hashear la contraseña y se va a guardar en la base de datos.
//En el login se va a buscar el usuario por email, se va a comparar la contraseña hasheada con la contraseña ingresada, si son iguales se va a generar un token y un refresh token, se va a guardar el token en una cookie y se va a enviar el token y el refresh token al cliente.
//En el refresh se va a verificar el refresh token, si es válido se va a generar un nuevo token y un nuevo refresh token, se va a enviar el nuevo token y el nuevo refresh token al cliente.
//En el logout se va a eliminar la cookie del token y se va a enviar un mensaje de logout exitoso al cliente.

const register = async (req, res) => {
    let userData = req.body;
    try {
        let existUserWithSameEmail = await User.exists({ email: userData.email });
        let existUserWithSameName = await User.exists({ userName: userData.userName });

        if (existUserWithSameEmail){
            errors.email = "The email already exists"
        }

        if (existUserWithSameName){
            errors.userName = "The user name already exists"
        }

        if (Object.keys(errors).length > 0) {
            return res.status(500).json({ errors });
        }

        let hashedPassword = await Promise((resolve, reject) => {
            bcrypt.hash(userData.password, 10, function(err, hash){
                if (err) reject(err)
                resolve(hash)
            });
        })

        let user = new User({
            ...userData,
            password: hash
        })
        await user.save()
        res.json({user})

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            let errors = {}
            Object.keys(error.errors).map((key) => {
                errors[key] = error.errors[key].message
            })
            res.status(400).json({ errors: errors})
        } else {
            res.status(500).json({error: error.toString()})
        }
    }
}

const login = async (req, res) => {
    let data = req.body;
    try {
        let user = await User.findOne({ email: data.email });

        let samePassword = await bcrypt.compareSync(data.password, user.password);

        if (!samePassword){
            const payload = {
                id: user._id,
                userName: user.userName
            }

            let token = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
            
            let refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d'});

            res.cookie('token', token, { httpOnly: true });

            res.json({ user: payload, token, refreshToken });
        } else {
            res.status(400).json({ error: 'Invalid credentials'});
        }
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            res.status(400).json({ error: error.toString() });
        } else {
            res.status(500).json({ error: error.toString() });
        }
    }
}

const refresh = (req, res) => { 
    let data = req.body;
    
    if (!data.refreshToken){
        return res.json({ error: 'No refresh token provided'});
    }

    try {
        let payload = jwt.verify(data.refreshToken, JWT_SECRET);
        payload = {
            id: payload.id,
            userName: payload.userName
        }


        let token = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
        let refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d'});
        
        res.json({ token, refreshToken }); 
    } catch (error) {
        return res.json({ error: error.toString() });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200)
        res.json({ message: 'Logout successful'})
    } catch (error) {
        res.status(500);
        res.json(error);
    }
}

module.exports = {
    register,
    login,
    refresh,
    logout
}