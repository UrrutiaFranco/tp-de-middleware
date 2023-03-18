const admins = ["Greta" , "ada" , "tim" , "vim"]


module.exports= (req,res,next) =>{
    
   if(admins.includes(req.query.admin)){
          next();
   }
   return res.redirect("/images/images.png")
   }