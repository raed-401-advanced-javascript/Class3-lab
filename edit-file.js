'use strict'

let file_system = require('fs');

let util = require('util');

let file_path = `${__dirname}/data/person.json`;

let read_the_file = util.promisify(file_system.readFile);

let write_file = util.promisify(file_system.writeFile);



let name = process.argv
// console.log(name)

let read_file = function (file_path){
    return read_the_file(file_path)
      .then(data =>{
          data = data.toString().trim()      
          let output_json = JSON.parse(data)
          output_json.firstName = 'raed'
          output_json.kids = 3
          // console.log(output_json)
          return output_json
      // }).then(data =>{
      //   return write_file(file_path,Buffer.from(data))
      //   .then(output=>{
      //     console.log(output)
      //     return output
        }).catch(err =>{console.error(err)})
      // }).catch(err =>{console.error(err)})
  
     
      
}
// read_file(file_path)


let write_output = function(file_path){
    return read_file(file_path)
       .then(output =>{
        write_file(file_path,Buffer.from(JSON.stringify(output)))
           let path_pass = file_path.split('/')
           process.argv.push(path_pass[path_pass.length - 1])
           return output
       }).catch(err=>{console.log(err)})
}
// write_output(`${__dirname}/data/test.json`);
module.exports = {read_file,write_output}