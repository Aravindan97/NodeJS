var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect("mongodb://127.0.0.1:27017",function(err, connection)
{
  db=connection.db("projector");
})
router.get('/all', function(req, res){
  var moviesCollection =db.collection("movies")
  moviesCollection.find().toArray(function(err, data){
    res.json(data);
  })
})

router.post('/addMovie', function(req, res, next)
{
  var movie =req.body;
  console.log(movie);
  var moviesCollection = db.collection('movies');
  moviesCollection.insert(movie, function(err, data)
{
  console.log(data)
  if(!err){
    return res.json({
      isSuccess: true
    });

  }else{
      return res.json({
        isSuccess: false
      });
    }
  })
});

module.exports = router;
