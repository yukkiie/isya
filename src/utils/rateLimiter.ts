export class RateLimiter {
  private tokens: number;
  private lastRefill: number;
  private readonly limit: number;
  private readonly interval: number;

  constructor(limit: number, intervalMs: number) {
    this.limit = limit;
    this.interval = intervalMs;
    this.tokens = limit;
    this.lastRefill = Date.now();
  }

  private refill() {
    const now = Date.now();
    const elapsed = now - this.lastRefill;

    if (elapsed >= this.interval) {
      this.tokens = this.limit;
      this.lastRefill = now;
    }
  }

  public consume(): boolean {
    this.refill();
    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }
    return false;
  }
}
