import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Bow from '../basic/weapons/Bow'

export default class MagicBow extends MagicItem {
  public readonly type: string = 'magicbow'
  public readonly name: string = 'Magic Bow'
  public readonly description: string = ''
  public readonly baseItem: Item = new Bow()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneShoot:
        return 300
      case MagicItemEffect.TwoDamage:
        return 300
    }
    throw new Error(`Effect can't be applied.`)
  }

  constructor(effect: MagicItemEffect.OneShoot | MagicItemEffect.TwoDamage) {
    super(effect)
  }
}
