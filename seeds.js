var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment   =require("./models/comment");
var data=[
       {
        name: "Cloud's Rest",
        image:"https://static.pexels.com/photos/776117/pexels-photo-776117.jpeg",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum , comes from a line in section 1.10.32."   
       },
       {
        name:"Desert Mesa",
        image:"https://static.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum , comes from a line in section 1.10.32."
        },
        {
        name:"Heaven in Forest",
        image:"https://static.pexels.com/photos/414727/pexels-photo-414727.jpeg",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum , comes from a line in section 1.10.32."
        }
    ]
function seedDB(){

//wipe everything from database
Campground.remove({},function(err){
//   if(err){
//   console.log(err);
//   }
//   console.log("Removed Campgrounds");
//   data.forEach(function(seed){
//       //add a few campgrounds
//       Campground.create(seed, function(err,campground){
//           if(err)
//           console.log(err);
//           else{
//               console.log("Added to campground");
//               //create comments
//               Comment.create(
//                   {
//                   text:"This place is greate but i hope that there was Internet",
//                   author:"Homer"
                    
//                   }, function(err,comment){
//                   if(err){
//                       console.log(err);
//                   }else{
//                     campground.comments.push(comment._id);
//                     campground.save();
//                     console.log("Created new Comment");
//                   }
//               });
//             }
//         });
//     });
});


}
module.exports=seedDB;