var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function (req,res){
	console.log('I received the request');
	var person1 = {
			'name':'raj',
			'email':'raj@gmail.com',
			'number':'111111111'
		},
	person2 = {
			'name':'sohan',
			'email':'sohan@gmail.com',
			'number':'22222'
		},
	person3 = {
			'name':'ashoka',
			'email':'ashoka@gmail.com',
			'number':'33333'
		}
	var contact = [person1,person2,person3];
	res.json(contact);
	
});
/**
 app.get('/',function (req, res) {
	
		res.send("hello world from server.js");
	});
*/
app.listen(3000);
console.log("server running on port 3000");
