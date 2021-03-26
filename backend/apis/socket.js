let io;
const cors = require("cors")

module.exports = {
    init: httpServer=>{
       io= require("socket.io")(httpServer,{
        cors:{
            origin:"http://localhost:3000",
            methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
            credentials:true,
            optionsSuccessStatus:204
        }
       });
       return io;
    },
    getIO:()=>{
        if(!io){
            throw new Error("socket io not connected!")
        }
        return io;
    }
}