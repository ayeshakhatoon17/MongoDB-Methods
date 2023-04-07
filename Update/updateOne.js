import "../dbConnect.js"
import userModel from "../models/index.js"
import mongoose from "mongoose"

async function updateOne(){
try {
    let check = await userModel.updateOne(
        {email : "suhail@gmail.com"}, //checking mail id and it's object in DB  (to update only one, we need to use unique elements such as id, mail, phone no)
        {$set : {"lastName" : "Roushan"}} //changing the last name of the same obj of given mailid 
     
    )
    console.log(check)
    mongoose.connection.close();
} catch (error) {
    console.log(error)
}
}
updateOne()