var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/newdb",{ useUnifiedTopology: true, useNewUrlParser: true  })

// Category schema 
const CategorySchema=new Schema({
        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
});
module.exports = CategorySchema;