import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import HandWeapon from '../basic/weapons/HandWeapon'

export default class MagicHandWeapon extends MagicItem {
  public readonly type: string = 'magichandweapon'
  public readonly name: string = 'Magic Hand Weapon'
  public readonly description: string = ''
  public readonly baseItem: Item = new HandWeapon()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneFight:
        return 300
      case MagicItemEffect.TwoFight:
        return 500
      case MagicItemEffect.TwoDamage:
        return 300
    }
    return 0
  }

  constructor(
    effect: MagicItemEffect.OneFight | MagicItemEffect.TwoFight | MagicItemEffect.TwoDamage
  ) {
    super(effect)
  }
}
