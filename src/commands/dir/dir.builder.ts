export class DirBuilder {
  private options: Map<string, string> = new Map()

  detailedOutput() {
    this.options.set('/w', '')
    return this
  }

  output(): string[] {
    const args: string[] = []
    this.options.forEach((value, key) => {
      args.push(key)
      args.push(value)
    })
    return args
  }
}
