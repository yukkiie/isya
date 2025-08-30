export interface ApiWrapper {
  name: string;
  fetchAction(options: { action: string; id?: string }): Promise<string | null>;
}
