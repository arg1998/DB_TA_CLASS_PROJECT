const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const playlistSchema = new Schema({
  name: Types.String,
  date: {
    y: Types.Number,
    m: Types.Number,
    d: Types.Number
  },
  creator: { type: Types.ObjectId, ref: "user" },
  members: [{ type: Types.ObjectId, ref: "user" }]
});

const playlistModel = mongoose.model("playlist", playlistSchema);

module.exports = playlistModel;
