import mongoose from 'mongoose'
import "../dbConnect.js"
import userModel from "../models/index.js"

async function findOnefun() {
let check = await userModel.findOne() //prints first object presentsin db
console.log(check)
mongoose.connection.close();
}
findOnefun()