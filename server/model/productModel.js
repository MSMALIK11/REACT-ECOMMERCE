import mongoose  from "mongoose";
const productSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product name"],
        trim:true
    },
   description:{
    type:String,
    required:[true,"enter description "]
   },
   price:{
       type:Number,
       required:[true,"enter product price"],
       maxLength:[8,"price cannot exceed 8 characters"]
   },
   rating:{
       type:Number,
       default:0
   },
   images:[{
       public_id:{
           type:String,
           required:true
       },
       url:{
           type:String,
           required:true
       },
       
   }],
   category:{
       type:String,
       required:[true,"please enter product category"]
   },
   stock:{
       type:String,
       required:[true,"enter stock"],
       maxLength:[4,"stock cannot exceed 4 characters"],
       default:1
   },

   numOfReviews:{
       type:Number,
       default:0
   },
   reviews:[
       {
           name:{
               type:String,
               required:true
           },
           rating:{
               type:Number,
               required:true
           },
           comment:{
               type:String,
               required:true
           }
       }
   ],
   createdAt:{
       type:Date,
       default:Date.now
   }
 




})


const Product = mongoose.model('product',productSchema)
export default Product