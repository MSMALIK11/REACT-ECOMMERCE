import User from "../model/userModel.js";
import ErrorHandler from '../utils/errorHandler.js';
import { catchAyncError } from '../middleWare/catchAsyncErrors.js';

export const userRegister=catchAyncError(async(req,res,next)=>{

const {name,email,password}=req.body;


const user = await User.create({
    name,
    email,
    password,
    avatat:{
        public_id:"sample public id",
        url:"sample profile url"
    },
});
const token = user.getJWTToken();

res.status(201).json({
    success:true,
    token,
})
})

// login user 
export const  loginUser= catchAyncError(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return next(new ErrorHandler("Enter Email & Password",400));

    }


    const user= await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("invalid Email & Password",401));
    }


    const isPasswordMatched= user.comparePassword(password);

    if(!isPasswordMatched){
        
        next(new ErrorHandler("invalid Email & Password",400));
    }
    const token = user.getJWTToken();

res.status(200).json({
    success:true,
    token,
})


})




