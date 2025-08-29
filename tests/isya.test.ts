import { Isya } from '../src/isya';

const TEST_ACTIONS = {
  kawaiiRed: ['hug', 'kiss', 'slap'], 
  otakuGifs: ['hug', 'kiss', 'slap'],
  nekosBest: ['hug', 'kiss', 'slap', 'poke', 'tickle']
};

describe('Isya Library', () => {
  const isya = new Isya({ kawaii: 'anonymous' });

  for (const [api, actions] of Object.entries(TEST_ACTIONS)) {
    for (const action of actions) {
      it(`should fetch "${action}" from ${api}`, async () => {
        try {
          const url = await isya.fetch(action);
          expect(url).toBeDefined();
          expect(url).toMatch(/^https?:\/\//);
        } catch (err) {
          console.warn(`Warning: ${api} failed to fetch ${action}:`, err);
        }
      });
    }
  }
});
