import ErrorHandler from "../utils/errorHandler.js";

export const errorMiddleWare=(err,req,res,next)=>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "internal server error";

// wrong mongodb id error
if(err.name=="CastError"){
    const message = `Resource not found . invalid : ${err.path}`
    err= new ErrorHandler(message,400)
}

    res.status(err.statusCode).json({
        succes:false,
        message:err.message
    });

};

