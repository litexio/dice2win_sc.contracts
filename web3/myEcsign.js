const Web3 = require('web3');

var web3 = new Web3('http://54.250.21.165:8545');  //rinkeby

//const Tx = require('ethereumjs-tx')
const ethUtil = require('ethereumjs-util');

//messageHash, privateKey are both buffer type
function myEcsign(messageHash, privateKey) {
    messageHash = new Buffer(messageHash.substr(2), 'hex')
    let signatureObj = ethUtil.ecsign(messageHash, privateKey);
    let signatureHexString = ethUtil.toRpcSig(signatureObj.v, signatureObj.r, signatureObj.s).toString('hex');
    let signatureBytes = web3.utils.hexToBytes(signatureHexString);
    return signatureBytes;
}

module.exports = {
    myEcsign,
}