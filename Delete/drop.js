//Drop is used for droping or deleting collections, 
//if collection gets deleted automatically DB is also gets deleted because DN's without collections are not created

async function dropCollection() {
    try {
      let check = await myModel.collection.drop();
      console.log(check);
      mongoose.connection.close();
    } catch (error) {
      console.log(error);
    }
  }
  
  dropCollection();