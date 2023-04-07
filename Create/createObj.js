import mongoose from 'mongoose'
import "../dbConnect.js"
import userModel from "../models/index.js"

// create help's to create an object inside the collection

async function create() {
try {
    let check = await userModel.create({
        "firstName": "Yahiya",
        "lastName": "Syed",
        "age": 20,
        "phone": "9704769081",
        "email":"yahiya@gmail.com",
        "address": " Hyd"
    })
    console.log(check);
    mongoose.connection.close()
} catch (error) {
    console.log(error) 
}
   
 
    }
    create()
