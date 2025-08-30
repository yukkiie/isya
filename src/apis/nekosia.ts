import { ApiWrapper } from './apiWrapper';
import { safeFetchJSON } from '../utils/fetcher';
import { RateLimiter } from '../utils/rateLimiter';

interface NekosiaResponse {
  success: boolean;
  status: number;
  image: {
    original: { url: string; extension: string };
    compressed: { url: string; extension: string };
  };
}

interface NekosiaOptions {
  id?: string;
  ip?: string;
}

export class Nekosia implements ApiWrapper {
  public name = 'nekosia';
  private baseURL = 'https://api.nekosia.cat/api/v1/images';
  private limiter = new RateLimiter(320, 5 * 60 * 1000); // 320 reqs / 5min
  private id?: string;
  private ip?: string;

  constructor(options?: NekosiaOptions) {
    this.id = options?.id;
    this.ip = options?.ip;
  }

  async fetchAction({ action, id }: { action: string; id?: string }): Promise<string | null> {
    if (!this.limiter.consume()) {
      throw new Error(`[${this.name}] Rate limit exceeded. Try again later.`);
    }

    const query = (id ?? this.id) ? `?id=${id ?? this.id}` : '';
    const result = await safeFetchJSON<NekosiaResponse>(`${this.baseURL}/${action}${query}`);
    if (result.isErr()) return null;

    return result.unwrap()?.image?.original?.url || null;
  }
}
