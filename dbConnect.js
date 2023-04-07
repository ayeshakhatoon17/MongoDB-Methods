import mongoose from 'mongoose'

const connect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://ayesha:ayesha@ayeshacluster.25mniqr.mongodb.net/method")
    } catch (error) {
        console.log(error)
    }
}
connect()