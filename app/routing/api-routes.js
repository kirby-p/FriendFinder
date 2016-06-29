var friendsData = require("../data/friends.js"),
	path = require("path");


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});
	
	app.post('/api/friends', function(req, res){

		if(tableData.length < 5 ){
			tableData.push(req.body);
			res.json(true); // KEY LINE
		}

		else{
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}

	});
}