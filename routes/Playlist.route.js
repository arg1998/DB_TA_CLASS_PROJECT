const PlaylistModel = require("../models/Playlist.model");
const UserModel = require("../models/User.model");
const mongoose = require("mongoose");
const { getCurrentDateObject } = require("../utils/utils");

const getAllPlaylists = async (req, res) => {
  const playlists = await PlaylistModel.find();
  if (playlists) {
    res.send(playlists);
  } else {
    res.send({ error: "cant fetch playlist from server" });
  }
};

const getPlayListByID = async (req, res) => {
  const { id: playlist_id } = req.params;
  const playlist = await PlaylistModel.findById(playlist_id);
  if (playlist) {
    res.send(playlist);
  } else {
    res.send({ error: "cant fetch playlist from server" });
  }
};

const addUserToPlayList = async (req, res) => {
  const { user_id, playlist_id } = req.body;
  const user = await UserModel.findById(user_id);
  if (user) {
    const playlist = await PlaylistModel.findById(playlist_id);
    if (playlist) {
      if (playlist.members.includes(user_id)) {
        res.send({ error: "user is already a member of this playlist " });
      } else {
        playlist.members.push(user_id);
        const saved_playlist = await playlist.save();
        res.send(saved_playlist);
      }
    } else {
      res.send({ error: "playlist not found" });
    }
  } else {
    res.send({ error: "user not found" });
  }
};

const createPlaylist = async (req, res) => {
  const { user_id, playlist_name } = req.body;

  const playlist = new PlaylistModel({
    playlist_name,
    creator: mongoose.Types.ObjectId(user_id),
    date: getCurrentDateObject()
  });

  const saved_playlist = await playlist.save();
  if (saved_playlist) {
    res.send(saved_playlist);
  } else {
    res.send({ error: "cant save the playlist" });
  }
};

const getPlaylistMembers = async (req, res) => {
  const { id: playlist_id } = req.params;
  const playlist = await PlaylistModel.findById(playlist_id)
    .populate("members")
    .exec();

  if (playlist) {
    res.send(playlist.members);
  } else {
    res.send({ error: "cant load members from this playlist" });
  }
};

module.exports = {
  getAllPlaylists,
  getPlayListByID,
  createPlaylist,
  addUserToPlayList,
  getPlaylistMembers
};
