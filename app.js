const EventModule=require("events");
const emitter=new EventModule();  
/* here EventModule is the class it 
can contain the different types of methods and objecrts */

emitter.on("message",function(){   //emitter.on anedi event ni register chesthadi on anedi method  
    console.log('meassage logged')
})

emitter.emit("message") 
// emit() it is make the noise,produce something.and we are signalling event happend
// ippudu cli lo node app.js run chesthe emi print kadu endukante ikkada emit() anedi hust event ni raise chesthadi 

