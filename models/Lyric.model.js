const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const lyricSchema = new Schema({
  text: Types.String,
  language: Types.String,
  likes_count: Types.Number,
  track: { type: Types.ObjectId, ref: "track" }
});

const lyricModel = mongoose.model("lyric", lyricSchema);

module.exports = lyricModel;
