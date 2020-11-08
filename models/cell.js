var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CellSchema = new Schema({
  row: { type: Number },
  coll: { type: Number },
  content: { type: String }
});

// Export model
module.exports = mongoose.model("Cell", CellSchema);
