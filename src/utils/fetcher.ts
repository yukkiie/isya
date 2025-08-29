import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Result } from '@sapphire/result';

export async function safeFetchJSON<T>(url: string): Promise<Result<T, string>> {
  try {
    const data = await fetch<T>(url, FetchResultTypes.JSON);
    return Result.ok(data);
  } catch (err) {
    return Result.err((err as Error).message || 'Failed to fetch');
  }
}
