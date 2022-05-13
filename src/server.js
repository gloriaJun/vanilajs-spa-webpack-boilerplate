const express = require("express");
const path = require("path");

const app = express();
const resolve = (dir) => path.resolve(__dirname, "frontend", dir);

/* Ensure any requests prefixed with /static will serve our "src/static" directory */
app.use("/static", express.static(resolve("static")));

/* Redirect all routes to our (soon to exist) "index.html" file */
app.get("/*", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
