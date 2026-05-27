const express = require('express')
const userController = require('../controllers/user.controller')
const router = express.Router()
const { verifyToken } = require('../middleware/oauth.middleware')


router.put('/theme', verifyToken, userController.changeTheme)

module.exports = {
    userRouter: router
}