# miner [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![Greenkeeper badge](https://badges.greenkeeper.io/PolkaJS/miner.svg)](https://greenkeeper.io/)

[travis-image]: https://travis-ci.org/PolkaJS/miner.svg?branch=master
[travis-url]: https://travis-ci.org/PolkaJS/miner
[npm-image]: https://img.shields.io/npm/v/@polkajs/miner.svg
[npm-url]: https://npmjs.org/package/@polkajs/miner
[downloads-image]: https://img.shields.io/npm/dm/@polkajs/miner.svg
[downloads-url]: https://npmjs.org/package/@polkajs/miner


## Install

`npm install --save @polkajs/miner`

## Use

`const miner = require('@polkajs/miner');`

**Mine**

```javascript
let hash_256 = 'ff8ae61c820d1ec905b14ce59071a60362bd6a65b62e2732e1b421f6dc1fb77c';
let difficulty = 16;

let nonce = miner.proofOfWork(hash_256, difficulty); // this requires 16 leading bits of 0's or Buffer.from([0x00, 0x00]) (0x0000 hex).

console.log(nonce);
// 273861
```

**Verify**

```javascript
let verified = miner.verify(hash_256, difficulty, nonce);

console.log(verified);
```

## API

### interface Transaction
``` javascript
{
  version: string,
  inputs: Input,
  outputs: Output,
  locktime: Date
}
```

### proofOfWork(payload, difficulty, nonce): number
- `payload`:    string | Array<Transaction>
- `difficulty`: number
- `nonce`:      number (default 0)
- return:       number

### verify(payload, difficulty, nonce)
- `payload`: string | Array<Transaction>
- `difficulty`: number
- `nonce`:   

---

## ISC License (ISC)
Copyright 2017 <Zion Coin>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
