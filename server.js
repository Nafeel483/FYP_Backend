'use strict';

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./connectMongo')


const user = require("./src/routes/user");
const videos = require("./src/routes/videos");
const serverless = require('serverless-http');
require("dotenv").config();


// const port = process.env.PORT || 5000;
const port = parseInt(process.env.PORT) || 8080;

connectDB()
// mongoose.connect(
//   `${process.env.MONGOO_DB}`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   },
//   () => {
//     console.log("connected to db");
//   }
// );

app.use(cors());
app.use(express.json());
//routes
app.use("/user", user);
app.use("/video", videos);
app.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
  res.send('Hello from App Engine!');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGOO_DB,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//       },
//     );
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("-----------Errot-----", error);
//     process.exit(1);
//   }
// }

// //Routes go here
// app.use(cors());
// app.use(express.json());
// //routes
// app.use("/user", user);
// app.use("/video", videos);
// app.get("/", (req, res) => {
//   res.send("Root place");
// });

// //Connect to the database before listening
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
//   })
// })