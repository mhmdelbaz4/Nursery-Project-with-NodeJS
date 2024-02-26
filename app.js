const express = require("express");
const mongoose = require("mongoose");
const childRoute = require("./Route/childRoute");
const teacherRoute = require("./Route/teacherRoute");
const classRoute = require("./Route/classRoute");
const authRoute = require("./Route/authRoute")
const upload = require("./multerMW");
const server = express();
const swagger = require('./swagger');
const port =process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/NuresryDB")
        .then(() =>{
            console.log("DB connnected......");
            server.listen(8080,()=>{
                console.log(`server is listening at port ${port}`);
            });            
        })
        .catch(error =>{
            console.log("DB problem!!!!!!!!!");
        });


swagger(server,port);        
////
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(upload.single("image"));

// routers

server.use(authRoute);
server.use(childRoute);
server.use(teacherRoute);
server.use(classRoute)

server.use((req,res,next)=>{
    res.status(404).json({message:"NotFound"})
});

// Error Middleware
server.use((error,req,res,next) =>{
   res.status(500).json({message:error.message+""}); 
});