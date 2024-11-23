const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://akshayasalaskar03:Akshaya0329@cluster0.0ecfbgd.mongodb.net/goFoodMern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = mongoose.connection.db.collection("food_category");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

module.exports = mongoDB;
