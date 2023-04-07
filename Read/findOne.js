import mongoose from 'mongoose'
import "../dbConnect.js"
import userModel from "../models/index.js"

async function findOne() {
let check = await userModel.findOne() //prints first object present in db
console.log(check)
mongoose.connection.close();
}
findOne()