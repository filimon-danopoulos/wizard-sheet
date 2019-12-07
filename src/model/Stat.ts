export default class Stat {
  public max: number
  public base: number
  private modifiers: number[]

  public get modified(): number {
    return this.modifiers.reduce((result, modifier) => result + modifier, this.base)
  }

  constructor(base: number, max: number = Infinity) {
    this.base = base
    this.modifiers = [] as number[]
    this.max = max
  }

  public canImprove(): boolean {
    return this.base < this.max
  }

  public improve(): void {
    if (this.base + 1 <= this.max) {
      this.base += 1
    }
    throw new Error(`Can't increase stat, alerady max.`)
  }

  public modify(modifier: number) {
    this.modifiers.push(modifier)
  }

  public reset() {
    this.modifiers.length = 0
  }
}
