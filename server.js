const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/fsdai")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const authRoutes = require("./routes/auth");
const dashRoutes = require("./routes/dashboard");

app.use("/api", authRoutes);
app.use("/api", dashRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));