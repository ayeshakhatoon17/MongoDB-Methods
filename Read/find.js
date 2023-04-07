import mongoose from 'mongoose'
import "../dbConnect.js"
import userModel from "../models/index.js"

async function find() {
let check = await userModel.find({}) //shows all the objects present in DB
console.log(check)
mongoose.connection.close();
}
find()
