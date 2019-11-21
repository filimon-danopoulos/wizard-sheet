import Weapon from './Weapon'

export default class CrossBow extends Weapon {
  public readonly type = 'crossbow' as string
  constructor() {
    super(2, 0)
  }
}
