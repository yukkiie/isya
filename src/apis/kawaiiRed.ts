import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';

export class KawaiiRed implements ApiWrapper {
  public name = 'kawaiiRed';
  private token?: string;
  private baseURL = 'https://kawaii.red/api';

  constructor(token?: string) {
    this.token = token || 'anonymous';
  }

  async fetchAction({ action }: { action: string; id?: string }): Promise<string | null> {
    if (!this.token) return null;

    const result = await safeFetchJSON<{ response: string }>(
      `${this.baseURL}/gif/${action}?token=${this.token}`
    );

    if (result.isErr()) {
      console.warn(`Failed to fetch ${action}:`, result.unwrapErr());
      return null;
    }

    return result.unwrap()?.response || null;
  }
}
