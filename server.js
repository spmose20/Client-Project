const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const corsOptions = {
  origin: "https://data.mongodb-api.com/app/data-dvrvr/endpoint/data/v1"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type 
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
mongoose.connect(("mongodb+srv://roma2:7HZin97asMtDqtmA@cluster-of-employee-dat.h4nhduo.mongodb.net/Profile?retryWrites=true&w=majority"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to _Nology High School application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
