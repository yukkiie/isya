import { Iyuki } from '../src/iyuki';

const TEST_ACTIONS = {
  kawaiiRed: ['hug', 'kiss', 'slap'],
  otakuGifs: ['hug', 'kiss', 'slap'],
  nekosBest: ['hug', 'kiss', 'slap', 'poke', 'tickle']
};

describe('Iyuki Library', () => {
  const iyuki = new Iyuki({ kawaii: 'anonymous' });

  for (const [apiName, actions] of Object.entries(TEST_ACTIONS)) {
     const apiInstance = iyuki['apis'].find(a => a.name === apiName);

    for (const action of actions) {
      it(`should fetch "${action}" from ${apiName}`, async () => {
        try {
          if (!apiInstance) throw new Error(`API instance ${apiName} not found`);
          
          const url = await apiInstance.fetchAction(action);
          
          if (!url) throw new Error(`API returned null for action "${action}"`);

          console.log(`[${apiName}] ${action} →`, url);
          expect(url).toBeDefined();
          expect(url).toMatch(/^https?:\/\//);
        } catch (err) {
          console.error(`[${apiName}] ${action} → Failed:`, err);
          throw err; // let Jest mark this test as failed
        }
      });
    }
  }
});
