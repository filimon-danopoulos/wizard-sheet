import Stat from './Stat'

export default class Health extends Stat {
  public current: number

  constructor(base: number, max: number = Infinity) {
    super(base, max)
    this.base = base
    this.current = base
    this.max = max
  }

  public heal(amount: number) {
    this.current = Math.min(this.current + amount, this.base)
  }

  public damage(amount: number) {
    this.current = Math.max(this.current - amount, 0)
  }
}
