const express = require ('express')
const fs = require ('fs')
const path = require ('path')

const app=express();
const dir=path.join(__dirname,"Files")


app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})