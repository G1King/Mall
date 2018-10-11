const dns = require('dns')
const fs = require('fs')

fs.readFile('./node.txt','utf-8',(e,data)=>{
    console.log(data)
})