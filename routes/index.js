var express = require("express");
var router = express.Router();
var passport = require("passport");
var User     = require("../models/user");


router.get("/", function(req, res) {
    res.redirect("/posts");
});


// ===========
// AUTH ROUTES
// ============

// show signup/register form

router.get("/register", function(req, res){
  res.render("register");
});


// signup logic route

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
      if(err){
        req.flash("error", err.message);
        console.log(err);
        return res.render("register")
      }
      passport.authenticate("local")(req, res, function(){
      req.flash("error", "Welcome to MQJ" + ' ' + user.username);
        res.redirect("/posts");
      });
    });
});


// login form route

router.get("/login", function(req, res){
  res.render("login");
});


// login logic route

router.post("/login", passport.authenticate("local",
    {
      successRedirect: "posts",
      failureRedirect: "login"
    }), function(req, res){ 
});


// logout route

router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "logged you out!");
  res.redirect("/posts");
});


module.exports = router;
