const express = require("express");
const pool = require("./database");
const app = express();
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
const bodyParser = require("body-parser");

// register the ejs view engine
app.set("view engine", "ejs");
app.use(bodyParser.json());

// TODO teeme mingi eraldi index lehe ka??? - nah
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
    res.status(500).json({ error: err.message });
  }
});

app.post("/resetlikes", async (req, res) => {
  try {
    await pool.query("UPDATE posts SET likes = 0;");
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/like", async (req, res) => {
  console.log(req.body);
  if (!req.body.id)
    return res.status("400").json({ error: "No id field in body" });

  let id = parseInt(req.body.id);
  if (isNaN(id))
    return res.status("400").json({ error: "Id has to be numeric" });

  try {
    await pool.query(`UPDATE posts SET likes = likes + 1 WHERE id = ${id};`);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err.message });
  }

  res.sendStatus(200);
});

app.get("/singlepost/:id", (req, res) => {
  console.log(`Singlepost ${req.params.id}`);
  res.render("singlepost");
  // TODO: Küsi õige postitus id põhjal
});

app.get("/addnewpost", (req, res) => {
  res.render("addnewpost");
});

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

app.post("/addnewpost", async (req, res) => {
  console.log(req.body)
  if (!req.body.body) {
    return res.status(400).json({ error: "Missing body" })
  }
  if (!(new RegExp(/(https?:\/\/.*\.(?:png|jpg|jpeg))$/i)).test(req.body.image) && !req.body.image == "") {
    return res.status(400).json({ error: "Faulty image url" })
  }
  
  try {
    let date = new Date()
    let currentDate = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} ${date.getTime()}`
    await pool.query(`INSERT INTO posts (body, image, likes, "createdAt") values ('${req.body.body}', '${req.body.image}', 0, '${currentDate}');`)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
  
  res.status(200).send("OK");
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
app.use("/img", express.static(__dirname + "/images"));
app.use("/webfonts", express.static(__dirname + "/scss/webfonts"));

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("App listening on port 3000")
});
