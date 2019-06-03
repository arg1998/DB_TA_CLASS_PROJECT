const config = require("./config/config");
const mongoose = require("mongoose");
const server = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoutes = require("./routes/User.route");
const playlistRoutes = require("./routes/Playlist.route");

// connect to data base
const db_uri = `mongodb://${config.db_username}:${config.db_pass}@${
  config.db_url
}:${config.db_port}/${config.db_name}`;

mongoose.connection.once("open", () =>
  console.log(">>>> CONNECTED TO DATABASE")
);
mongoose.connection.on("error", error => console.error(error));
mongoose.connect(db_uri, { useNewUrlParser: true });

// set up the server
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

// set up server's routes
server.post("/register", usersRoutes.registerUser);
server.post("/add_friend", usersRoutes.addFriend);
server.get("/user", usersRoutes.getAllUsers);
server.get("/user/:user_id", usersRoutes.getUser);

server.get("/playlist", playlistRoutes.getAllPlaylists);
server.get("/playlist/:id", playlistRoutes.getPlayListByID);
server.post("/playlist/create", playlistRoutes.createPlaylist);
server.post("/playlist/members", playlistRoutes.addUserToPlayList);
server.get("/playlist/:id/members", playlistRoutes.getPlaylistMembers);

// start the server
server.listen(config.server_port, () => {
  console.log(">>>> SERVER IS UP");
});
