import Weapon from './Weapon'

export default class HandWeapon extends Weapon {
  public readonly type = 'handweapon' as string
  public readonly name = 'Hand Weapon' as string
  public readonly description = '' as string
  public readonly cost: number = 0
  constructor(required: boolean = false) {
    super(0, required)
  }
}
