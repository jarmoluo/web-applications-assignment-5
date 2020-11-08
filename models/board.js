var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var Cell = mongoose.model("Cell");

var BoardSchema = new Schema({
  cells: [{ type: Schema.Types.ObjectId, ref: "Cell" }]
});

// Export model
module.exports = mongoose.model("Board", BoardSchema);
