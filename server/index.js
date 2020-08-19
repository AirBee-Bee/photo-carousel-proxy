const express = require('express');
const app = express();
const path = require('path');
const port = 2222;

app.get('/listing/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/styles.css', (req, res) => {
  res.sendFile('styles.css', { root: path.join(__dirname, '../public') });
});

app.get('/listing/:listingId/photos', (req, res) => {
  res.redirect(`http://localhost:3000${req.url}`);
});

app.get('/listing/:listingId/info', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/listing/:listingId/amenities', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/listing/:listingId/highlights', (req, res) => {
  res.redirect(`http://localhost:3333${req.url}`);
});

app.get('/listing/:listingId/rooms', (req, res) => {
  res.redirect(`http://localhost:5000${req.url}`);
});

app.get('/propertyScores/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/propertyReviews/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/userInfo/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.listen(port, () => console.log(`Proxy server is listening on port ${port}`));