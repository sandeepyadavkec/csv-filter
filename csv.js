const CSVToJSON = require('csvtojson');
const JSONToCSV = require('json2csv').parse;
const FileSystem = require('fs');
var _ = require("underscore");

CSVToJSON().fromFile("./serviceteammembers.csv").then(source => {
	

	var filtered = _.where(source, {"User Status": "active"});
	var csv = JSONToCSV(filtered);
	console.log(csv);
});