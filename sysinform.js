const  os = require('os');
const totalRAM = os.totalmem();
const freeRAM = os.freemem();
///const si = required('systeminformation');



//const checkDiskSpace = require('check-disk-space');
//console.log(checkDiskSpace);

// Total memory RAM
const totalRAM1 = totalRAM / (1024 * 1024 * 1024);
const totalRAM2 = totalRAM1.toFixed(2);
console.log(`Total memory: ${totalRAM2} GB`);

// free memory RAM
const freeRAM1 = freeRAM / (1024 * 1024 * 1024);
const freeRAM2 = freeRAM1.toFixed(2);
console.log(`Available Memory: ${freeRAM2} GB`);

// OS type
console.log('O.S platform: '+ os.platform());
console.log('O.S Version:  ' + os.version());
console.log('O.S-type: ' + os.type());


// Hostname
console.log('Hostname: '+os.hostname());


// Network interface
//console.log(os.networkInterfaces());
// information about the logical CPU core

//console.log(os.cpus());
