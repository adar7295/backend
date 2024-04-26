const { model, Schema } = require('../connection');

const mySchema = new Schema({
  name : { type: String , required: true },
  password : String,
  email : { type:String, uniqure:true }, // password is required and must be unique
  createdAt : { type: Date, default: Date.now}
});

module.exports=model('user',mySchema);