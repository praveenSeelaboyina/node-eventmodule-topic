const EventModule=require("events");
const emitter=new EventModule();  
/* here EventModule is the class it 
can contain the different types of methods and objecrts */

emitter.on("message",(arg)=>{   //emitter.on anedi event ni register chesthadi on anedi method  
    console.log('meassage logged',arg)
})

emitter.emit("message",{id:"1"}) 
// emit() it is make the noise,produce something.and we are signalling event happend
// ippudu cli lo node app.js run chesthe emi print kadu endukante ikkada emit() anedi hust event ni raise chesthadi 

/* alage eppudaithe manam event ni call chesthamo adi some id,url ni return chesthadi
danni manam message pakkana oka object dwara pamputhamu. */