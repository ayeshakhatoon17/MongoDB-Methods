import mongoose from 'mongoose'
import "./dbConnect.js"
import userModel from "./models/index.js"

async function verify() {
let check = await userModel.find({})
console.log(check)
mongoose.connection.close();
}
verify()