const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");
const videos = require("./routes/videos");
require("dotenv").config();
const port = process.env.PORT || 3008;

mongoose.connect(
  `${process.env.MONGOO_DB}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: false,
    useFindAndModify: false
  },
  () => {
    console.log("connected to db");
  }
);

app.use(cors());
app.use(express.json());
//routes
app.use("/user", user);
app.use("/video", videos);
app.get("/", (req, res) => {
  res.send("Root place");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
