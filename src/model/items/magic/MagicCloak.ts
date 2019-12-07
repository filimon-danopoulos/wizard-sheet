import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Cloak from '../basic/armour/Cloak'

export default class MagicCloak extends MagicItem {
  public readonly type: string = 'magiccloak'
  public readonly name: string = 'Magic Cloak'
  public readonly description: string = ''
  public readonly baseItem: Item = new Cloak()
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
