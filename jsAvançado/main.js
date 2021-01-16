//EVENT EMITTER

/*const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on("User Log", data => {
    console.log(data);
});

emitter.emit("User Log", { user: "Sandro Junior" });*/

const EventEmitter = require('events')

const emitter = new EventEmitter

emitter