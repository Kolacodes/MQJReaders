let express = require("express");
let router  = express.Router();

router.get("/", function(req, res){
  try{
    res.render("beyond");
}
catch(err){
    console.error(err)
    return res.redirect('/')
}
})

module.exports = router;