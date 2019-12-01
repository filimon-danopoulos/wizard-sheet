import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import TwoHandedWeapon from '../basic/weapons/TwoHandedWeapon'

export default class MagicTwoHandedWeapon extends MagicItem {
  public readonly type: string = 'magictwohandedweapon'
  public readonly name: string = 'Magic Two-Handed Weapon'
  public readonly description: string = ''
  public readonly baseItem: Item = new TwoHandedWeapon()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneFight:
        return 300
      case MagicItemEffect.OneDamage:
        return 200
      case MagicItemEffect.TwoDamage:
        return 400
    }
    throw new Error(`Effect can't be applied.`)
  }

  constructor(
    effect: MagicItemEffect.OneFight | MagicItemEffect.OneDamage | MagicItemEffect.TwoDamage
  ) {
    super(effect)
  }
}
