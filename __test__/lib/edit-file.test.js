'use strict';

const file_method = require('../../edit-file');


const path_require = require('path');

describe('module open file',()=>{
    describe('test the promise',()=>{
        it('check the type od data output from file',()=>{
            let path = `${__dirname}/data/person.json`;
            process.argv.push(path_require.basename(path))
            console.log(process.argv[process.argv.length-1],'hi')
            return file_method.output_of_read(path)
            .then(data =>{
                expect(typeof(data.toString().trim())).toEqual('string')
            })
        it('')
        })
    })
})