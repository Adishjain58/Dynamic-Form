const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/formConfig", (req, res) => {
  fs.writeFileSync("./config.json", JSON.stringify(req.body));
  res.status(200).json({ success: true });
});

app.get("/getFormConfig", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./config.json"));
  res.status(200).json({ data });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "/Client/form/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/Client/form/build/index.html"));
  });
}

// app.use(express.static(path.join(__dirname, "/Client/form/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/Client/form/build/index.html"));
// });
// console.log(path.join(__dirname, "/Client/form/build/index.html"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
