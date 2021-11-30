const express = require('express');
const pool = require('./database');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);
// TODO teeme mingi eraldi index lehe ka???
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/posts', async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query(
      "SELECT * FROM posts"
    );
    res.render('posts', { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
  
});

app.get('/singlepost', (req, res) => {
  res.render('singlepost');
});

app.get('/addnewpost', (req, res) => {
  res.render('addnewpost');
});

app.use((req, res) => {
  res.status(404).render('404');
});