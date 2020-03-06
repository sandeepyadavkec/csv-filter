var fs = require('fs');
var csvLineArr = fs.readFileSync('serviceteammembers.csv').toString().split("\n");


for(var line = 0; line < csvLineArr.length; line++){
  
  var csvFieldsArr = csvLineArr[line].split(",");

  for(var column = 0; column < csvFieldsArr.length; column++){
  
    if(csvFieldsArr[1] === "active")
    {
      console.log(csvLineArr[line]);
    }

}

}