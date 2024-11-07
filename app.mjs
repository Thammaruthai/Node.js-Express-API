import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

const profile = {
  name: "john",
  age: 20,
};

// open port for API
app.listen(port, () => {
  console.log(`Server starting at ${port}`);
});

app.use(cors());

// Get profile and Response Profile
app.get("/profiles", (req, res) => {
  return res.json(profile);
});

app.get("/", (req, res) => {
  return res.send("Hello world this is my first API");
});
