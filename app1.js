const EventEmitter=require("events")

const Logger=require("./logger")
const logger=new Logger()

logger.on('messagelogged',(arg)=>{
    console.log(arg)
})


logger.log("message")