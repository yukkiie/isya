import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';
import { Result } from '@sapphire/result';

interface NekosBestResponse {
  results: { anime_name: string; url: string }[];
}

export class NekosBest implements ApiWrapper {
  public name = 'nekosBest';
  private baseURL = 'https://nekos.best/api/v2';

  async fetchAction({ action }: { action: string; id?: string }): Promise<string | null> {
    const result = await safeFetchJSON<NekosBestResponse>(`${this.baseURL}/${action}`);
    if (result.isErr()) return null;

    return result.unwrap()?.results?.[0]?.url || null;
  }
}
