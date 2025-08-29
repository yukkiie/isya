
# Iyuki

An unified API WRAPPER for Nekos.best, Kawaii.red & otakugifs.xyz. created out of frustration of while writing simple codebase but want to support multiple API Provider you need to handle core business logic when two or three API supports same endpoint you need to handle them separately and all. 




## Features

- Unified API for Nekos.best, Kawaii.red & Otakugifs.xyz
- Typescript Ready
- Handles API differences internally 
- Automatic Random API Selection if multiple API Provider supports same endpoint 
- easy to use iyuki.fetch('slap')



## Installation

Install Iyuki with NPM

```bash
  npm install iyuki
```

## Usage/Examples

```javascript
import { Iyuki } from 'iyuki';

async function main() {
  const iyuki = new Iyuki({ Kawaii: 'Your_Kawaii.red_Token' });
const slapUrl = await iyuki.fetch('slap');
console.log(slapUrl);

}
main();
```

