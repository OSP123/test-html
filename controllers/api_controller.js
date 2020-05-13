//this is the users_controller.js file
const axios = require("axios");
exports.index = function(req,res) {
  axios.get("https://www.omdbapi.com/?t=evangelion&y=&plot=short&apikey=trilogy").then(function(response) {
    res.json(response.data);
  })
};

