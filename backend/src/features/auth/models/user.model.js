import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"],
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:true,
        minlength:[6, "password must be at least 6 characters long"],
        select:false,
    },
    organizationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
        
    },

    role:{
        type:String,
        enum:["admin","hr","recruiter","employee"],
        default:"employee"
    },

    isEmailVerified:{
        type:Boolean,
        default:false
    },
    emailVerificationToken: String,
  emailVerificationExpires: Date,
  refreshToken: String,
  passwordResetToken: String,
  passwordResetExpires: Date,

},{timestamps:true});

const User = mongoose.model("User",userSchema);
export default User;

//hash password before saving

userSchema.pre("save",async function(next){
if (!this.isModified("password")) return next();
this.password = await bcrypt.hash(this.password,12);
next();

// compare password



})


