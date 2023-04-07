import mongoose from 'mongoose'
import "../dbConnect.js"
import userModel from "../models/index.js"

async function distinctFun() {
let check = await userModel.distinct("name") //prints all the values of specified key
console.log(check)
mongoose.connection.close();
}
distinctFun()