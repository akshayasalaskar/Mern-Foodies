const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    res.send("Sever Error");
  }
});

module.exports = router;
