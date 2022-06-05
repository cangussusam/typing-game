import express from 'express'
import { ResultsController } from '../controllers/results-controller.js'

export const resultsRouter = express.Router()

resultsRouter
    .get('/results', ResultsController.showResults)
    .post('/results', ResultsController.registerResults)
    .delete('/results', ResultsController.deleteResults)
    .delete('/results/:id', ResultsController.deleteResultById)
