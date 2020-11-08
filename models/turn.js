var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TurnSchema = new Schema({
  player: { type: Number }
});

// Export model
module.exports = mongoose.model("Turn", TurnSchema);
