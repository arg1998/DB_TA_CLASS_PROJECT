const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const artistSchema = new Schema({
  name: Types.String,
  view_count : Types.Number,
  date: {
    y: Types.Number,
    m: Types.Number,
    d: Types.Number
  },
  albums: [{ type: Types.ObjectId, ref: "album" }]
});

const artistModel = mongoose.model("artist", artistSchema);

module.exports = artistModel;
