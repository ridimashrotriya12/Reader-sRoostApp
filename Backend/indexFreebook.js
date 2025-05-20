import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import FreebookRoute from "./Route/freebook.route.js";

import cors from "cors";
const app = express()
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI

//connection of mongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

//defining routes

app.use("/freebook",FreebookRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});