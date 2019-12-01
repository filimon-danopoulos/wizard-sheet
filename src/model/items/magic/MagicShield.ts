import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import Shield from '../basic/armour/Shield'

export default class MagicShield extends MagicItem {
  public readonly type: string = 'magicshield'
  public readonly name: string = 'Magic Shield'
  public readonly description: string = ''
  public readonly baseItem: Item = new Shield()
  public get cost(): number {
    switch (this.effect) {
      case MagicItemEffect.OneArmour:
        return 400
    }
    throw new Error(`Effect can't be applied.`)
  }

  constructor(effect: MagicItemEffect.OneArmour) {
    super(effect)
  }
}
