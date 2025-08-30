import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';
import { Result } from '@sapphire/result';

interface OtakuGifsResponse {
  url: string;
}

export class OtakuGifs implements ApiWrapper {
  public name = 'otakuGifs';
  private baseURL = 'https://api.otakugifs.xyz/gif';

  async fetchAction({ action }: { action: string; id?: string }): Promise<string | null> {
    const result = await safeFetchJSON<OtakuGifsResponse>(
      `${this.baseURL}?reaction=${action}&format=gif`
    );

    if (result.isErr()) return null;

    return result.unwrap()?.url || null;
  }
}
