const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");

// MIDDLEWARE AND EXPRESS CREATION
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// ROUTES
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// API ENDPOINTS AND USAGE
app.get("/api/notes", (req, res) => {
  fs.readFile(__dirname + "/db/db.json", function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>"
      );
    } else {
      res.writeHead(200, { "Content-Type": "text/json" });
      res.end(data);
    }
  });
});

app.post("/api/notes", function (req, res) {
  fs.readFile(__dirname + "/db/db.json", function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>"
      );
    } else {
      res.writeHead(200, { "Content-Type": "text/json" });
      res.end(data);
    }
  });
  var newNote = req.body;
  fs.writeFile("db.json", JSON.stringify(newNote), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
});

// LISTENING TO PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
