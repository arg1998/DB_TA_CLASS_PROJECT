const mongoose = require("mongoose");
const {
  Schema,
  Schema: { Types }
} = mongoose;

const userSchema = new Schema({
  name: Types.String,
  username: Types.String,
  password: Types.String,
  email: Types.String,
  birth_date: {
    y: Types.Number,
    m: Types.Number,
    d: Types.Number
  },
  friends: [{ type: Types.ObjectId, ref: "user" }],
  playlists: [{ type: Types.ObjectId, ref: "playlist" }]
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
