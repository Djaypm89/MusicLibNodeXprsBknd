const express = require("express");

const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, function () {
    console.log("Server started. Listening on port 3001");
});



app.get('/api/songs', (req, res) => {
    console.log("GET all songs triggered!")
    const songs = repoContext.songs.findAllSongs()
    return res.send(songs)
});

app.get('/api/songs/:id', (req,res) => {
    console.log("GET song by ID triggered!")
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});