const { MongoClient } = require("mongodb");

require("dotenv").config();


const userRoute = require("./routes/user.js");

const showRoute = require("./routes/show.js");
//creat mmongoclient
const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

port =  process.env.port || 3000


const url =  "mongodb+srv://admin:admin@cluster0.rhz4kmh.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/show", showRoute);

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + '/public/info.html');
});

app.listen(port);
console.log(`app running at http://localhost: ${port}`);
