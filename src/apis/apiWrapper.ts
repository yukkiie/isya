export interface ApiWrapper {
  name: string;
  fetchAction(action: string): Promise<string | null>;
}
