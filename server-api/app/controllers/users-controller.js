import { users } from '../models/Users.js'

export class UsersController {

    static showUsers = (req, res) => {

        users.find()
            .exec((err, users) => {
                if(err) res.status(500).send({message: `{${err.message}} : Error to find users.`})

                else res.status(200).json(users)
            })

    }

    static showUserById = (req, res) => {

        const id = req.params.id

        users.findById(id, (err, user) => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to find user.`})

            else res.status(200).json(user)
        })
    }

    static registerUser = (req, res) => {

        let user = new users(req.body)

        user.save(err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to register a new User.`})

            else res.status(201).send({message: `User registred successfully.`})
        })

    }

    static removeUsers = (req, res) => {

        users.deleteMany(err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to remove all Users.`})

            else res.status(200).send({message: `All users removed successfully.`})
        })
    }

    static removeUserById = (req, res) => {

        const id = req.params.id

        users.findByIdAndDelete(id, err => {
            if(err) res.status(500).send({message: `{${err.message}} : Error to remove this user.`})

            else res.status(200).send({message: `User removed successfully.`})
        })
    }

    static authenticateUser = async (req, res) => {

        const {login,password} = req.body

        await res.status(200).send({message: `${login}`})

    }

}