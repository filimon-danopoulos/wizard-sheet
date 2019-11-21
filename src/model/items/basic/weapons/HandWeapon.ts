import Weapon from './Weapon'

export default class HandWeapon extends Weapon {
  public readonly type = 'handweapon' as string
  constructor() {
    super(0, 0)
  }
}
