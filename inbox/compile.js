const path = require('path');
const fs = require('fs');
//solidity compiler
const solc = require('solc');


//generate path to inbox.sol file
//points directly from current directory to our smart contract
const inboxPath = path.resolve(__dirname,'contracts','inbox.sol');
// read raw source code from contract
const source = fs.readFileSync(inboxPath,'utf-8');

// number of contracts we are trying to compile is passed as a parameter
module.exports = solc.compile(source,1).contracts[':inbox'];


