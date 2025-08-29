import { KawaiiRed } from './apis/kawaiiRed';
import { OtakuGifs } from './apis/otakuGifs';
import { NekosBest } from './apis/nekosBest';
import { API_ACTIONS } from './constants';
import { ApiWrapper } from './apis/apiWrapper';
import { SayaOptions } from './types';

export class Saya {
  private apis: ApiWrapper[] = [];

  constructor(options: SayaOptions = {}) {
    this.apis.push(new KawaiiRed(options.kawaii));
    this.apis.push(new OtakuGifs());
    this.apis.push(new NekosBest);
  }

  async fetch(action: string): Promise<string> {
    if (!Object.values(API_ACTIONS).some(actions => actions.includes(action))) {
      throw new Error(`Action "${action}" is not supported by any API`);
    }

    const validApis = this.apis.filter(api => API_ACTIONS[api.name]?.includes(action));
    if (!validApis.length) throw new Error(`No API supports action: ${action}`);

    const shuffled = validApis.sort(() => 0.5 - Math.random());

    for (const api of shuffled) {
      const url = await api.fetchAction(action);
      if (url) return url;
    }

    throw new Error(`Failed to fetch "${action}" from all APIs`);
  }
}

export const saya = new Saya();
