import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Ring from '../basic/armour/Ring'

export default class MagicRing extends MagicItem {
  public readonly type: string = 'magicring'
  public readonly name: string = 'Magic Ring'
  public readonly description: string = ''
  public readonly baseItem: Item = new Ring()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneArmour:
        return 400
    }
    return 0
  }

  constructor(effect: MagicItemEffect.OneArmour) {
    super(effect)
  }
}
