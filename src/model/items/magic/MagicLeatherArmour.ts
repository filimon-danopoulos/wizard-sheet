import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import LeatherArmour from '../basic/armour/LeatherArmour'

export default class MagicLeatherArmour extends MagicItem {
  public readonly type: string = 'magicleatherarmour'
  public readonly name: string = 'Magic Leather Armour'
  public readonly description: string = ''
  public readonly baseItem: Item = new LeatherArmour()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneArmour:
        return 300
    }
    throw new Error(`Effect can't be applied.`)
  }

  constructor(effect: MagicItemEffect.OneArmour) {
    super(effect)
  }
}
