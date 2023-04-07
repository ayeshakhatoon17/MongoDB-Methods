import "../dbConnect.js";
import userModel from "../models/index.js";
import mongoose from "mongoose";

// Replaces the current value  with new value

async function replaceOne() {
  try {
    let check = await userModel.replaceOne(
      { email: "ayeshaakhatoon.ak@gmail.com" }, // New Replacement value
      { email: "ayesha@gmail.com" } // Existing value 
    );
    console.log(check);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

replaceOne();