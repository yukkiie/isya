import { Iyuki } from '../src/iyuki';

const TEST_ACTIONS = ['alarm', 'airkiss', 'hug', 'kiss', 'slap', 'vtuber', 'catgirl'];

describe('Iyuki High-Level API', () => {
  const iyuki = new Iyuki({ kawaii: 'anonymous', nekosia: { ip: '123456' } });

  for (const action of TEST_ACTIONS) {
    it(`should fetch "${action}" using high-level fetch`, async () => {
      const url = await iyuki.fetch(action);

      if (!url) throw new Error(`Failed to fetch "${action}"`);

      console.log(`[Iyuki] ${action} →`, url);

      expect(url).toBeDefined();
      expect(url).toMatch(/^https?:\/\//);
    });
  }
});
