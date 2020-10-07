//express
const express = require('express')
const mongoose =require('mongoose')
const Router = express.Router()
const model = require('./model')
const plant = model.getModel('plant')
const bodyParser =require('body-parser')
const plantRouter = require('./plantData')
const app =express()
app.use(bodyParser.json())

app.use('/plantData',plantRouter)
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})