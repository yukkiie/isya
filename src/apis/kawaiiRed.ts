import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';
import { Result } from '@sapphire/result';

export class KawaiiRed implements ApiWrapper {
  public name = 'kawaiiRed';
  private token?: string;
  private baseURL = 'https://kawaii.red/api';

  constructor(token?: string) {
    this.token = token;
  }

  async fetchAction(action: string): Promise<string | null> {
    if (!this.token) return null;
    const result = await safeFetchJSON<{ url: string }>(`${this.baseURL}/${action}?token=${this.token}`);
    if (result.isErr()) return null;

    return result.unwrap()?.url || null;
  }
}
