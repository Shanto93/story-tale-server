const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("tale twist is running");
});

app.listen(port, () => {
  console.log(`Tale Twist running on port ${port}`);
});
