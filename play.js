const miner       = require('./lib/proofOfWork');

let hash_256 = 'ff8ae61c820d1ec905b14ce59071a60362bd6a65b62e2732e1b421f6dc1fb77c';

let nonce = miner.proofOfWork(hash_256, 16);

console.log(nonce);
// 20514

let verified = miner.verify(hash_256, 16, nonce);
console.log(verified);
