const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/plant", {useNewUrlParser:true}, function(err){

    　　if(err){
    
    　　　　console.log('Connection Error:' + err)
    
    　　}else{
    
    　　　　console.log('Connection success!')
    
    　　}
    
})

const models ={
    plant:{
        plantIndex:{type:String, require:true},
        PLYModel :{type:String}
    }

}

for(let m in models) {
    mongoose.model(m,new mongoose.Schema(models[m]) ) //建立模型
}

module.exports ={
    getModel:function(name) {
        return mongoose.model(name)
    }
}