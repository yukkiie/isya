
# Iyuki

Tired of Juggling Multiple between API and writing code for each API and fetching anime GIFs/Picture from Nekosbest, Nekosia, Otakugifs & Kawaiired ? Meet Iyuki, Iyuki will do extra work you just enjoy iyuki.fetch('slap') and enjoy. 





## Features

- Unified API wrapper for Nekos.best, Kawaii.red, Nekosia.cat and Otakugifs.xyz
- TypeScript-ready with proper typings
- Handles API differences & quirks internally 
- Automatically selects a random API when multiple providers support the same action
- Handles API rate limits (Nekosia only), avoids spamming requests when rate-limited.
- super easy to use iyuki.fetch('slap');



## Installation

Install Isya with NPM

```bash
  npm install iyuki
```
    
## Usage/Examples

```javascript
import { Iyuki } from 'iyuki';

async function main() {
  // Initialize with optional API tokens or IPs
  const iyuki = new Iyuki({
    kawaii: 'Your_Kawaii.red_Token', // optional & defaults to anonymous 
    nekosia: { ip: '123456' }        // optional id and IP availability 
  });

  // Fetch a reaction image normally
  const hugUrl = await iyuki.fetch('hug');
  console.log('Hug image URL:', hugUrl);

  // Fetch an image from Nekosia with a specific ID
  const vtuberUrl = await iyuki.fetch('vtuber', { id: '9876543210' });
  console.log('Vtuber image URL from Nekosia with specific ID:', vtuberUrl);

  // Fetch another reaction
  const slapUrl = await iyuki.fetch('slap');
  console.log('Slap image URL:', slapUrl);
}

main();
```


## Contributing

Contributions are always welcome!

We are open to support other stable APIs & adding new feature if you want to include new API and expand new Feature. Feel free to open PR.

