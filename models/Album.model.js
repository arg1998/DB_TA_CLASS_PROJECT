const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const albumSchema = new Schema({
  name: Types.String,
  num_tracks: Types.Number,
  cover_art: Types.String,
  date: {
    y: Types.Number,
    m: Types.Number,
    d: Types.Number
  },
  artist: { type: Types.ObjectId, ref: "artist" },
  tracks: [{ type: Types.ObjectId, ref: "track" }]
});

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel;
