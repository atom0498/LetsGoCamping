//all the middleware goes here
var Campground=require("../models/campground"),
     Comment   =require("../models/comment");
var middlewareObj={};

middlewareObj.checkCampgroundOwnership=function checkCampgroundOwnership(req, res, next){
      if(req.isAuthenticated()){
             
           Campground.findById(req.params.id,function(err,foundCampground){
                if(err){
                    req.flash("error","Campground not Found");
                res.redirect("back");
             } else {
                 //does user own campground?
            if(foundCampground.author.id.equals(req.user._id)){
               next();
                   
             } else{
                 req.flash("error", "You dont have the permission to do that")
                 res.redirect("back");
                 
             }  
             }   
        });
      }   else{
          res.redirect("back");
      }
};
middlewareObj.checkCommentOwnership=function(req, res, next){
      if(req.isAuthenticated()){
             
           Comment.findById(req.params.comment_id,function(err,foundComment){
                if(err){
                res.redirect("back");
             } else {
                 //does user own comment?
            if(foundComment.author.id.equals(req.user._id)){
               next();
                   
             } else{
                 req.flash("error","You don't have permission to do that");
                 res.redirect("back");
                 
             }  
             }   
        });
      }   else{
          req.flash("error","You need to Login First!!!! ");
          res.redirect("back");
      }
};
middlewareObj.isLoggedIn=function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","You need to Login First!!!! ");
    res.redirect("/login");
};

module.exports=middlewareObj;

