const assert = require('assert');
const  ganache = require('ganache-cli');
//Web3 - in uppercase is a constructor used to create instances of web3 library
const Web3 = require('web3');
// web3 in lowecase is used to create an instance
//provider acts as communication between web3 and ganache
const web3 = new Web3(ganache.provider());




