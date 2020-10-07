const express =require('express')
const Router =express.Router()
const model = require('./model')
const plant = model.getModel('plant')


Router.get('/serialNumber', function(req, res){
    const { plantID } = req.body
    User.findOne({plantID}, function(err, doc){
        if(doc) {
            return res.json({ code:0, plantID:'100'})
        }
    })
})
module.exports =Router 