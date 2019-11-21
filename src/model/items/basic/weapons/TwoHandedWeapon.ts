import Weapon from './Weapon'

export default class TwoHandedWeapon extends Weapon {
  public readonly type = 'twohandedweapon' as string
  constructor() {
    super(2, 0)
  }
}
