
# Isya

An unified API WRAPPER for Nekos.best, Kawaii.red & otakugifs.xyz. created out of frustration of while writing simple codebase but want to support multiple API Provider you need to handle core business logic when two or three API supports same endpoint you need to handle them separately and all. 




## Features

- Unified API for Nekos.best, Kawaii.red & Otakugifs.xyz
- Typescript Ready
- Handles API differences internally 
- Automatic Random API Selection if multiple API Provider supports same endpoint 
- easy to use isya.fetch('slap')



## Installation

Install Isya with NPM

```bash
  npm install isya
```

## Usage/Examples

```javascript
import { Isya } from 'isya';

async function main() {
  const isya = new Isya({ Kawaii: 'Your_Kawaii.red_Token' });
const slapUrl = await isya.fetch('slap');
console.log(slapUrl);

}
main();
```

