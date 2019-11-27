export default class Health {
  public base: number
  public current: number

  constructor(base: number) {
    this.base = base
    this.current = base
  }

  public heal(amount: number) {
    this.current = Math.min(this.current + amount, this.base)
  }

  public damage(amount: number) {
    this.current = Math.max(this.current - amount, 0)
  }
}
