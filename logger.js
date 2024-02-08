const EventEmitter=require("events");


class Logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit('messagelogged',{id:"1"});

    }
}

module.exports=Logger;