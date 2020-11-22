let express = require("express");
let router  = express.Router();

router.get("/", (req, res)=>{
  try{
    res.render("sales/sales")
}
catch(err){
    console.error(err)
    return res.redirect('/')
}
});

module.exports = router;