const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));
var player1 = 20;
var player2 = 20;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`, (err) => {
      if (err) {
        console.log(err);
        res.end(err.message);
      }
    });
});

app.get("/playersLifes", (req, res) => {
	res.send(`${player1}:${player2}`)
});

app.get("/addLife/:player", (req, res) => {
	if (req.params.player == 1) {
        player1++;
    } else {
        player2++;
    }
	res.send(`done`)
});

app.get("/removeLife/:player", (req, res) => {
    if (req.params.player == 1) {
        player1--;
    } else {
        player2--;
    }
	res.send(`done`)
});

app.get("/reset", (req, res) => {
	player1 = 20;
    player2 = 20;
	res.send(`done`)
});

app.listen(8888, () => {
	console.log("Server is running at port 8888");
});