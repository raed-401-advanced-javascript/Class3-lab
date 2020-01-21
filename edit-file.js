'use strict'

let file_system = require('fs');

let util = require('util');

let file_path = `${__dirname}/data/person.json`;

let read_the_file = util.promisify(file_system.readFile);

let write_file = util.promisify(file_system.writeFile);



let name = process.argv
console.log(name)

let output_of_read = function (file_path){
    return read_the_file(file_path)
      .then(data =>{
          return data.toString().trim();      
      })
      .then(data =>{
          console.log(write_file(data,'change'))

      })
      .catch(err =>{console.error(err)})
      
}

let final_read = output_of_read(file_path)
let write_output = function(final_read,data){
    return write_file(final_read,data)
       .then(output =>{
           console.log(output);
           return output
       }).catch(err=>{console.log(err)})
}
write_output(`${__dirname}/data/person.json`,'5');
module.exports = {output_of_read ,write_output};