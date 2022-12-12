#!/usr/bin / env node

var fs = require('fs');
var fse = require('fs-extra');


var example = "Please make sure that what you entered is similar to this : "+ "\"/path/to/one,/path/to/two\"" + " " + "\"/dest/to/one,/dest/to/two\""




try {

var src = process.argv[2];
var dest = process.argv[3];
var srcList = src.split(",")
var destList = dest.split(",")

for(var i = 0 ; i < srcList.length;i+=1) {
    var sourceDir = srcList[i];
    var destDir   = destList[i];

    if (!fs.existsSync(destDir)){
        fs.mkdirSync(destDir, { recursive: true });
    }
    
    fse.copy(sourceDir, destDir); 
    

    console.log("success! copied: " + sourceDir + " to: " + destDir + " ");
}


    
} catch (error) {
    console.error(example);  
}
