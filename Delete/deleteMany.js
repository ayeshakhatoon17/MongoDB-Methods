import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";

//Delete Many delete's  all the Object which satisfies the condition given 

async function deleteMany() {
  try {
    let check = await userModel.deleteMany({
      lastName: "empty", //Delete's all the Obejcts whose lastName is empty
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

deleteMany();