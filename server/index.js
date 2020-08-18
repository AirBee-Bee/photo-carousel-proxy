const express = require('express');
const app = express();
const path = require('path');
const port = 2222;

app.get('/listing/:listingId', (req, res) => {
  console.log('listing');
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/listing/:listingId/photos', (req, res) => {
  console.log('photos');
  res.redirect(`http://localhost:3000/listing/${req.params.listingId}/photos`);
});

app.get('/listing/:listingId/info', (req, res) => {
  console.log('info');
  res.redirect(`http://localhost:3333/listing/${req.params.listingId}/info`);
});

app.get('/listing/:listingId/amenities', (req, res) => {
  console.log('amens');
  res.redirect(`http://localhost:3333/listing/${req.params.listingId}/amenities`);
});

app.get('/listing/:listingId/highlights', (req, res) => {
  console.log('highlights');
  res.redirect(`http://localhost:3333/listing/${req.params.listingId}/highlights`);
});

app.listen(port, () => console.log(`Proxy server is listening on port ${port}`));