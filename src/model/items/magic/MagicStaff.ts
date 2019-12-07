import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Staff from '../basic/weapons/Staff'

export default class MagicStaff extends MagicItem {
  public readonly type: string = 'magicstaff'
  public readonly name: string = 'Magic Staff'
  public readonly description: string = ''
  public readonly baseItem: Item = new Staff()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneFight:
        return 200
      case MagicItemEffect.TwoDamage:
        return 200
    }
    return 0
  }

  constructor(effect: MagicItemEffect.OneFight | MagicItemEffect.TwoDamage) {
    super(effect)
  }
}
