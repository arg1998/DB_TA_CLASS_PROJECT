const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const trackSchema = new Schema({
  name: Types.String,
  length: Types.Number,
  likes_count: Types.Number,
  album: { type: Types.ObjectId, ref: "album" },
  artist: { type: Types.ObjectId, ref: "artist" },
  lyric: { type: Types.ObjectId, ref: "lyric" },
});

const trackModel = mongoose.model("playlist", trackSchema);

module.exports = trackModel;
