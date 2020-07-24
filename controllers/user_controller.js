const user_model= require("../models/user_model");
const { response } = require("express");


exports.home = (req,res,next)=>{
    res.send("Welcome!");
}

exports.write = (req,res,next)=>{
    const user =new user_model(req.body);
    user.save((err,data)=>{
        if(err){
            res.send(err);
        }
        else {
            res.json({ user });
        }
    });
}


exports.read = (req,res,next)=>{
    
    user_model.find({},(err,data)=>{
        if(err){
            res.send(err);
        }
        else {

            res.json({data});
        }
    });
}

exports.update = (req,res,next)=>{
    
    user_model.findOneAndUpdate({name:"sh"},{name:req.body.name},(err,data)=>{
        if(err){
            res.send(err);
        }
        else {

            res.send("updated");
        }
    });
}

exports.delete = (req,res,next)=>{
    
    user_model.deleteMany({name:"malik"},(err,data)=>{
        if(err){
            res.send(err);
        }
        else {

            res.send("deleted");
        }
    });
}