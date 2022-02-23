import express from 'express';
const app =express();
import { errorMiddleWare } from './middleWare/error.js';
import Router from './productRoute/productroute.js';
import user from './productRoute/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config()
import {connection} from './database/db.js';

// handlingn uncaught  Exception

process.on("uncaughtException",(err)=>{
    console.log(`Error :${err.message} `); 
    console.log("server down due to uncaught Exception error");
    process.exit(1)
})

app.use(express.json())
app.use('/api/v1',Router);
app.use('/api/v1',user);
// middleware for error 
app.use(errorMiddleWare);


const server=app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})

connection();


// unhandled  primise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("server down due to unhandled primise Rejection ");

    server.close(()=>{
        process.exit(1);
    })
})