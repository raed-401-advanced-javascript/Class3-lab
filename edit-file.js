'use strict'

let file_system = require('fs');

let util = require('util');

let file_path = `${__dirname}/data/person.json`;

file_system.readFile(file_path,(err,data)=>{
    if(err){throw err}
    console.log(data.toString().trim())

});


