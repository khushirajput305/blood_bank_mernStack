const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "WELCOME TO BLOOD BANK",
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("server is running on port 8000");
});
