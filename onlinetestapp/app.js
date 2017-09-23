var express= require("express");
var bodyParser=require("body-parser")
const ejs=require("ejs");
var app= express();
app.use(express.static("public"));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());


 const dash = require("./routes/teacher.js");
 app.use('/',dash);

 const student= require("./routes/student.js")
 app.use('/',student);

app.listen("4321",function(){
    console.log("SErver start")
})