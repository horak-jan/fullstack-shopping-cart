const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/user");
const news = require("./routes/news");
const comment = require("./routes/comment");
const about = require("./routes/about");
const game = require("./routes/game");
const media = require("./routes/media");
const order = require("./routes/order");

const app = express();
var cors = require("cors");

app.use(cors());
mongoose
	.connect(
		"mongodb+srv://tester:12345@gs-vfeo1.mongodb.net/steam?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(console.log("Database connected..."))
	.catch(error => {
		console.log(error);
	});

app.use(passport.initialize());
require("./passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/user", user);
app.use("/news", news);
app.use("/comment", comment);
app.use("/about", about);
app.use("/game", game);
app.use("/media", media);
app.use("/order", order);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`);
});
