import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.DATABASE)

export const db = mongoose.connection
