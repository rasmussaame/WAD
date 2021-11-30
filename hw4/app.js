const express = require("express");
const pool = require("./database");
const app = express();
const path = require("path");
const sassMiddleware = require("node-sass-middleware");

// register the ejs view engine
app.set("view engine", "ejs");

// TODO teeme mingi eraldi index lehe ka???
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts");
    res.render("posts", { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/singlepost", (req, res) => {
  res.render("singlepost");
});

app.get("/addnewpost", (req, res) => {
  res.render("addnewpost");
});

app.use(
  sassMiddleware({
    src: __dirname + "/scss",
    dest: __dirname + "/cssPublic",
    debug: false,
  })
);

app.use(express.static(path.join(__dirname, "cssPublic")));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000);
