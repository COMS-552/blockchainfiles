// from the tutorial which uses Infura
// const ipfs = new ipfs({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

//run with local daemon
const ipfs = require('ipfs-api');
const ipfs = new ipfsApi('localhost', 5001, {protocol:'http'});
export default ipfs