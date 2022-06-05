
import { results } from "../models/Results.js"

export class ResultsController {

    static showResults = (req, res) => {
        results.find()
            .exec((err, results) => {
                if(err) res.status(500)
                else res.status(200).json(results)
            })
    }

    static registerResults = (req, res) => {
        
        let result = new results(req.body)

        result.save((err) => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to register the results.`})
            
            else res.status(201).send(result.toJSON()) 
        })
    }

    static deleteResultById = (req, res) => {

        const id = req.params.id

        results.findByIdAndDelete(id, err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to remove the result.`})

            else res.status(200).send({message: `Result removed successfully.`})
        })
    }

    static deleteResults = (req, res) => {

        results.deleteMany(err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to remove all currencies.`})

            else res.status(200).send({message: `All results removed successfully.`})
        })
    }

}