import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema(
    {
        login: {type: String, required: true},
        password: {type: String, required: true, select: false}
    },
    {
        versionKey: false
    }
)

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

export const users = mongoose.model('users', UserSchema)