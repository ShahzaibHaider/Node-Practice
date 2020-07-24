const database = require("mongoose");

database.connect("mongodb://localhost:27017/practise",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},(err)=>{
    if (!err){
        console.log("DB Connected");
    }
    else {
        console.log(err);
    }
});
