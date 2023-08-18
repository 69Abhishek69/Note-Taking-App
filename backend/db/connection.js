const URL='mongodb+srv://nidhijain:55zE0lJLh6abt4vR@cluster0.yfm4eqy.mongodb.net/userdb?retryWrites=true&w=majority';
const mongoose=require('mongoose');
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
module.exports=mongoose;