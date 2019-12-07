import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Crossbow from '../basic/weapons/Crossbow'

export default class MagicCrossbow extends MagicItem {
  public readonly type: string = 'magiccrossbow'
  public readonly name: string = 'Magic Crossbow'
  public readonly description: string = ''
  public readonly baseItem: Item = new Crossbow()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneShoot:
        return 300
      case MagicItemEffect.TwoDamage:
        return 300
    }
    return 0
  }

  constructor(effect: MagicItemEffect.OneShoot | MagicItemEffect.TwoDamage) {
    super(effect)
  }
}
