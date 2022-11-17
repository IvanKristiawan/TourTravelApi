const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
const UserRoute = require("./routes/UserRoute.js");
const PaketTravelRoute = require("./routes/PaketTravelRoute.js");
const PaketTerbeliRoute = require("./routes/PaketTerbeliRoute.js");

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Use Routes
app.use(UserRoute);
app.use(PaketTravelRoute);
app.use(PaketTerbeliRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
