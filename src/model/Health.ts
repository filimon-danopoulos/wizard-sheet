export default class Health {
  public readonly base: number

  private _current: number
  public get current(): Number {
    return this._current
  }

  constructor(base: number) {
    this.base = base
    this._current = base
  }

  public heal(amount: number) {
    this._current = Math.min(this._current + amount, this.base)
  }

  public damage(amount: number) {
    this._current = Math.max(this._current - amount, 0)
  }
}
