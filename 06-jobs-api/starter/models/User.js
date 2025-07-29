const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Name is required'],
    minlength:3,
    maxlength:50,
  },
  password:{
    type: String,
    required: [true, 'Password is required'],
    minlength:6,
    
  },
})

UserSchema.pre('save', async function(){
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt)

})

UserSchema.methods.createJWT = function(){
   return jwt.sign({userId:this._id,name:this.name}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME
    })
}
module.exports = mongoose.model("User", UserSchema)