var express = require('express');
var router = express.Router();

const net = require('../helpers/net')
const apiKey = process.env.API_KEY;
const base = 'https://api.uwaterloo.ca/v2'
const format = '.json'

router.get(/(.*)/, function(req, res, next) {
	var endpoint = req.params[0];

	if(endpoint === '/' || endpoint === ''){
		res.status(404).send('Not Found');
	}

	if(endpoint.indexOf('/', 1) === endpoint.length-1){
		//if the last character is a slash we want to get rid of it
		endpoint = endpoint.slice(0, -1);
	}

	const params = {
		key: apiKey
	}

	net.fetch(base+endpoint+format, params).then(json=>{
		res.send(json);
	}).catch(()=>{
		res.send('Something went wrong');
	});
});

module.exports = router;
