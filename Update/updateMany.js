import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";
async function updateMany() {
  try {
    let check = await userModel.updateMany(
      { lastName: "KHatoon" }, //identifying objects of lastname whose value is KHatoon
      { $set: { lastName: "empty" } } //setting lastName's value "KHatoon" with "empty"
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

updateMany();