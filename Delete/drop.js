//Drop is used for droping or deleting collections, 
//if collection gets deleted automatically DB is also gets deleted because DN's without collections are not created
import mongoose from "mongoose";
 import "../dbConnect.js";
import myModel from "../models/index.js";
import NewCollection from "../Create/createCollection.js"

async function dropCollection() {
    try {
      let check = await myModel.NewCollection.drop();
      console.log(check);
      mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  }
  
  dropCollection();

