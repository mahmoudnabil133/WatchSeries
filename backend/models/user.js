const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'userName is required'],
    unique: true
  },
  email: {
    type: String,
    validate:[validator.isEmail, 'please provide a valid email'],
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum:{
      values: ['user', 'admin'],
      message: 'role must be either user or admin'
    },
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minLength: [6, 'password must contain at least 6 characters'],
    select: false
  },
  confirmPassword:{
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      validator: function(val){
        return this.password === val
      },
      message: 'passwords are not the same'
    }
  },
  watchList: [{ type: mongoose.Schema.Types.ObjectId, ref: "TvShow"}],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
  }
});

UserSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
})

UserSchema.pre('save', async function(next){
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000 ; // to make sure the token is created after the password is changed
  next()
});
UserSchema.pre(/^find/, async function(next){
  this.find({active: {$ne: false}});
  next();
});

UserSchema.methods.correctPassword = async function(candidatePasswrod, userPassword) {
  return await bcrypt.compare(candidatePasswrod, userPassword);
}
// changing password after the token is created
UserSchema.methods.changedPassword = function(JWTTimeStamp) {
  if (this.passwordChangedAt){
    const passworChangingTime = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return passworChangingTime > JWTTimeStamp
  }
  return false
};

UserSchema.methods.CreatePasswordResetToken  = function(){
  const resetToken = 
    crypto
      .randomBytes(32)
      .toString('hex');
  this.passwordResetToken = 
    crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
}
module.exports = mongoose.model("User", UserSchema);
