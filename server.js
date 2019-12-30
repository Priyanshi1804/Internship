var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyparser = require('body-parser');
app.use(bodyparser.json({type:'application/json'}));
app.use(bodyparser.urlencoded({extended:true}));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'cv'
});


 var server = app.listen(2773, function()
 {
    var host = server.address().address 
    var port = server.address().port
    console.log("start");
 });

con.connect(function(err) {
  if (err) console.log(err);
  else console.log("Connected!");
});

app.get('/newform',function(req,res)
{
  
    con.query('select * from newform', function(err,rows,fileds){

        if(err) console.log(err);


        else {
            console.log(rows);
            res.send( rows);
        }



    });

});

