var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Constants
var PORT = 4002;

// App
var app = express();
app.get('/nodeapi', function (req, res) {
  res.setHeader('Content-Type', 'text/html');

  res.write('Hello world world world starting!\n');

  res.end();
});

app.get('/dbtest', function (req, res) {
  //res.setHeader('Content-Type', 'text/html');

  //var url = 'mongodb://localhost:27017/dummyTest';
  var url = 'mongodb://testmongodb:27017/dummyTest';
  MongoClient.connect(url, function(err, db) {
    //assert.equal(null, err);
    console.log("Connected correctly to server.");
    //res.write("Connected correctly to server.");
    
    var myCol= db.collection('myCollection');
    myCol.count(function (err, count) {
      console.log('Total Rows:' + count);    
      res.send('Total Rows:' + count);    
    });

    db.close();
  });

});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
