// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://akshayasalaskar03:Akshaya0329@cluster0.0ecfbgd.mongodb.net/goFoodMern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     { useNewUrlParser: true },
//     async (err, result) => {
//       if (err) console.log("---", err);
//       else {
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection(
//           "food_items"
//         );
//         fetched_data.find({}).toArray(function (err, data) {
//           if (err) console.log(err);
//           else {
//             global.food_items = data;
//             console.log(global.food_items);
//           }
//         });
//       }
//     }
//   );
// };

// module.exports = mongoDB;

// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://akshayasalaskar03:Akshaya0329@cluster0.0ecfbgd.mongodb.net/goFoodMern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("connected");

//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection(
//         "food_category"
//       );
//       foodCategory.find({}).toArray(function (err, catData) {
//         if (err) console.log(err);
//         else {
//           global.food_items = data;
//           global.foodCategory = catData;
//         }
//       });
//     });
//   } catch (err) {
//     console.log("---", err);
//   }
// };

// module.exports = mongoDB;

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
