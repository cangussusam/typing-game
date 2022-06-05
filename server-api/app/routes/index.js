import express from 'express'
import { resultsRouter } from './results-routes.js'
import { usersRouter } from './users-routes.js'

export const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send({api: 'Welcome to Typing Game Results API.'}))

    app.use(
        express.json(),
        resultsRouter,
        usersRouter
    )
}