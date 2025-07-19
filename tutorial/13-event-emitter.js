const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('response', (name, id)=>{
  console.log(`data recieved  here ${name} with id: ${id}`)
})
emitter.on('response', () => console.log(`some other logic`)
)
emitter.emit('response', 'van', 34)