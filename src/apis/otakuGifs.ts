import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';
import { Result } from '@sapphire/result';

export class OtakuGifs implements ApiWrapper {
  public name = 'otakuGifs';
  private baseURL = 'https://otakugifs.xyz/api';

  async fetchAction(action: string): Promise<string | null> {
    const result = await safeFetchJSON<{ url: string }>(`${this.baseURL}/${action}`);
    if (result.isErr()) return null;

    return result.unwrap()?.url || null;
  }
}
