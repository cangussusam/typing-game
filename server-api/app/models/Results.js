import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
    {
        id: {type: String},
        points: {type: Number, required: true},
        error: {type: Number, required: true},
        accuracy: {type: Number, required: true},
        wpm: {type: Number, required: true}
    },
    {
        versionKey: false
    }
)

export const results = mongoose.model('results', resultSchema)
