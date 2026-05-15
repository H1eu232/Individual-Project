// app.js — pretend this is your group's existing Express service.
// It runs locally with `node server.js` (see server.js).
// Lambda doesn't enter the picture here — keep it framework-pure.

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Lambda Express App Running"
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "not found"
  });
});

module.exports = app;
