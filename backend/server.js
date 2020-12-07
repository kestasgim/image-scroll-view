const express = require('express');
const Flickr = require('flickr-sdk');

const FLICKR_API_KEY = '446f42d8f8df390a303ba7291cacb801';
// const FLICKR_SECTRET = 'e197989c7e78160d';

const flickr = new Flickr(FLICKR_API_KEY);
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});
/*
app.get('/flickr/search', (req, res, next) => {
  const per_page = req.query.perPage;
  const page = req.query.page;
  const searchText = req.query.search;
  flickr.photos.search({
    text: searchText
    , page: page
    , per_page: per_page
  }).then(function (fres) {
    res.status(200).json( fres.body.photos.photo );
  }).catch(function (err) {
    console.error('ERROR: ', err);
  });
});
 */
app.get('/flickr/recent', (req, res, next) => {
  const per_page = req.query.perPage;
  const page = req.query.page;
  flickr.photos.getRecent({
    page: page
    , per_page: per_page
  }).then(function (fres) {
    res.status(200).json( fres.body.photos );
  }).catch(function (err) {
    console.error('ERROR: ', err);
  });
});

app.listen(5000); 
