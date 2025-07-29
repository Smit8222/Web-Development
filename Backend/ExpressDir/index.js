const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/home", (req, res) => {
    res.send("you contacted home path");
});

app.get("/search", (req, res) => {
    res.send("you contacted search path");
});

app.get("/:username/:id", (req, res) => {
    let {username, id } = req.params;
    res.send(`Welcome to the page of @${username}.`);
});