export interface AnimeImageResponse {
  url: string;
  source?: string;
  type?: string;
}

export interface IyukiOptions {
  kawaii?: string; // Kawaii.red token
  nekosia?: { id?: string; ip?: string }; //if you want to init anything like id or ip please check documentation for it on nekosia website
}
