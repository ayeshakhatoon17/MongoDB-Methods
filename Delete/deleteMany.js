import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function deleteMany() {
  try {
    let check = await userModel.deleteMany({
      lastName: "empty",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

deleteMany();