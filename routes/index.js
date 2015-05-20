var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

// router.get('/hello', function(req, res) {
//   res.send("The Date is " + new Date().toString());
// });

router.get('/u/:username',function(req,res){
	//res.send("user: "+ req.params.username)
});

router.get('/post',function(req,res){
});

router.get('/reg',function(req,res){
    res.render('reg',{title:'用户注册'})
});

router.get('/login',function(req,res){
});

router.get('/logout',function(req,res){
});

module.exports = router;
