'use strict';

const file_method = require('../../edit-file');

const path = `/home/student52/temp/project_folder/codefellows_401/Class3-lab/data/person.json`
// const path_require = require('path');

describe('module open file',()=>{
   it('check the out put of the function',()=>{
       return file_method.read_file(path)
       .then(data =>{
        //    console.log(data.firstName)
           expect(data.firstName).toEqual("raed")
       })
    })
    it('check if the method will write in file ',()=>{
        return file_method.write_output(path)
        .then(data =>{
            console.log(data)
            expect(data.kids).toEqual(3)
        })
    })
})