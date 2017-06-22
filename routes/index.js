var express = require('express');
var router = express.Router();
var URL="mongodb://nodemon:123456@ds131782.mlab.com:31782/vaioti";

const db=require('monk')(URL);

const docs=db.get('pro');
/* GET home page. */
router.get('/welcome', function(req, res, next) {
  //res.render('index', { title: 'Express' });

    docs.find({},function (err,docs){
        if(err) console.log(err);
        else res.json(docs);
    })
});
router.get('/wel', function(req, res, next) {
    res.send('Sahi Chal rha hai!');
});

module.exports = router;