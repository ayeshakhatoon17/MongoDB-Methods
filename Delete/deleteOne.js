import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function deleteOne() {
  try {
    let check = await userModel.deleteOne({
      lastName: "Roushan",
    });
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

deleteOne();