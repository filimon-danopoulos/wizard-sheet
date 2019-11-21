export default class Stat {
  public readonly base: number
  private modifiers: number[]

  public get modified(): number {
    return this.modifiers.reduce((result, modifier) => result + modifier, this.base)
  }

  constructor(base: number) {
    this.base = base
    this.modifiers = [] as number[]
  }

  public modify(modifier: number) {
    this.modifiers.push(modifier)
  }

  public reset() {
    this.modifiers.length = 0
  }
}
