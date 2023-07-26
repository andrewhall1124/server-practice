const express = require("express");
const app = express();
const port = process.env.port || 8080;

app.get("/", (req, res) =>{
  res.send("Welcome to my express server")
})

app.listen(port, () =>{
  console.log(`Express server is running on ${port}`)
})