import Weapon from './Weapon'

export default class HandWeapon extends Weapon {
  public readonly type = 'handweapon' as string
  public readonly name = 'Hand Weapon' as string
  public readonly description = '' as string
  constructor(required: boolean = false) {
    super(0, 0, required)
  }
}
