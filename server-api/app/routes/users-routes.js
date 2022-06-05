import express from 'express'
import { UsersController } from '../controllers/users-controller.js'

export const usersRouter = express.Router()

usersRouter
    .get('/users', UsersController.showUsers)
    .get('/users/:id', UsersController.showUserById)
    .post('/users', UsersController.registerUser)
    .post('/users/authenticate/', UsersController.authenticateUser)
    .delete('/users', UsersController.removeUsers)
    .delete('/users/:id', UsersController.removeUserById)