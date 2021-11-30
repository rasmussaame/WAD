const express = require('express');
const pool = require('./database');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

// listen for requests on port 3000
app.listen(3000);
/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
app.get('/', (req, res) => {
  /* res.sendFile('./views/index.html', { root: __dirname }); */
  res.render('index');
});

app.get('/posts', async (req, res) => {
  /* res.sendFile('./views/index.html', { root: __dirname }); */
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

app.get('/contactus', (req, res) => {
  /* res.sendFile('./views/index.html', { root: __dirname }); */
  res.render('contactus');
});

app.use((req, res) => {
  /* res.status(404).sendFile('./views/404.html', { root: __dirname });*/
  res.status(404).render('404');
});