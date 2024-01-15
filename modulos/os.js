const os = require('os');

// console.log(os.arch()); // la arquitectura
// console.log(os.platform()); // la plataforma

// console.log(os.cpus().length); // la info en cpu

// console.log(os.constants);//errores del sistema 

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

// console.log(os.freemem()); //diceen memoria libre cuanto tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem()));

// console.log(os.homedir())
// console.log(os.tmpdir())

// console.log(os.hostname());
console.log(os.networkInterfaces());
