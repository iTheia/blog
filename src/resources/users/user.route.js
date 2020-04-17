const express = require('express')
const userRoute = express.Router()
const controller = require('./user.controller')


userRoute.route('/')
    .get(controller.getUsers)
    .post(controller.createUser)

userRoute.route('/:id')
    .put(controller.updateUser)
    .delete(controller.deleteUser)

module.exports = userRoute
