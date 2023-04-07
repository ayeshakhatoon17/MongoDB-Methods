import "../dbConnect.js"
import userModel from "../models/index.js"
import mongoose from "mongoose";

// To create a collection first we need to create a schema then the model (where we create a collection)

// 1. Creating a Schema
const mySchema = new mongoose.Schema({
    age: {
      type: Number,
    },
  });
  
  // 2. Creating a Model
  // create a Mongoose model for the collection
  const myModel = mongoose.model("taehyung", mySchema, "NewCollection");
                            // "CustomName",SchemaName,"NewCollectioName"
  async function createCollection() {
    try {
      let check = await myModel.create({});
      console.log(`Collection created: ${check.collection.collectionName}`);
      console.log(check);
      mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  }
  
  createCollection();