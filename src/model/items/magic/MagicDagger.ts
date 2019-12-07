import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Dagger from '../basic/weapons/Dagger'

export default class MagicDagger extends MagicItem {
  public readonly type: string = 'magicdagger'
  public readonly name: string = 'Magic Dagger'
  public readonly description: string = ''
  public readonly baseItem: Item = new Dagger()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneFight:
        return 300
      case MagicItemEffect.OneDamage:
        return 200
      case MagicItemEffect.TwoDamage:
        return 300
    }
    return 0
  }

  constructor(
    effect: MagicItemEffect.OneFight | MagicItemEffect.OneDamage | MagicItemEffect.TwoDamage
  ) {
    super(effect)
  }
}
