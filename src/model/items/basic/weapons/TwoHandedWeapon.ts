import Weapon from './Weapon'

export default class TwoHandedWeapon extends Weapon {
  public readonly type = 'twohandedweapon' as string
  public readonly name = 'Two-handed Weapon' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(2, 0, required)
  }
}
