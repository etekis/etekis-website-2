var express = require('express')
var app = express()
var router = express.Router();
var path = __dirname+'/views/'

app.set('port',(process.env.PORT || 8080))

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static('assets'))

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(app.get('port'),function(){
  console.log("App is running on", app.get('port'));
});
