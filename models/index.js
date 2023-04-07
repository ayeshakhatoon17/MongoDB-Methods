import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
firstName:{
    type :String,
    required: true
},
lastName:{
    type :String,
    required: true
},
age:{
    type: Number,
    required: true
},
phone:{
    type : String,
    required: true,
    unique: true
},
email:{
    type: String,
    required: true,
    unique: true
}
})



const userModel = new mongoose.model("ayesha",usersSchema,"methods")

export default userModel 

