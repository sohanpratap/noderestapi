var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);


app.get('/contactlist',function (req,res){
	console.log('I received a get request');

	db.contactlist.find(function (err, docs){

		console.log(docs);
		res.json(docs);

	});
	
	
});

app.post('/contactlist',function (req, res){
	console.log(req.body);
	
	db.contactlist.insert(req.body, function (err, docs){

		res.json(docs);
	});

});


 app.delete('contactlist/:id',function (req, res) {
	
		//var id =req.params.id;
		//console.log(id);
	});


app.listen(3000);
console.log("server running on port 3000");
