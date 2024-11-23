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

// This API endpoint is configured to handle POST requests to the "/foodData" route. When a POST request
// is made to this endpoint, it will send back a response containing the values of global.food_items and
// global.foodCategory. If an error occurs during the execution of the endpoint, it will send back a "Server Error" message as the response.
