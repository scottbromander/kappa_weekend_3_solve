var express = require("express");
var router = express.Router();

//          "/add/5/5"
router.get("/add/:gremlins/:kitties", function(req,res){
    var math = parseInt(req.params.gremlins) + parseInt(req.params.kitties);
    math = math.toString();
    res.send(math);
});

router.get("/sub/:gremlins/:kitties", function(req,res){
    var math = parseInt(req.params.gremlins) - parseInt(req.params.kitties);
    math = math.toString();
    res.send(math);
});

router.get("/multi/:gremlins/:kitties", function(req,res){
    var math = parseInt(req.params.gremlins) * parseInt(req.params.kitties);
    math = math.toString();
    res.send(math);
});

router.get("/div/:gremlins/:kitties", function(req,res){
    var math = parseInt(req.params.gremlins) / parseInt(req.params.kitties);
    math = math.toString();
    res.send(math);
});

module.exports = router;
