const express=require("express");
const bodyparser=require("body-parser");

const {PORT}=require('./config/serverConfig')

const setupStartServer=async()=>{

    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env);
    });
}

setupStartServer();