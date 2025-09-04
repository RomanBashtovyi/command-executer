export interface iStreamLogger {
  log(...args: any[]): void
  error(...args: any[]): void
  end(): void
}
