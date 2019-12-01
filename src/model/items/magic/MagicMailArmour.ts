import MagicItem, { MagicItemEffect } from './MagicItem'
import Item from '../Item'
import MailArmour from '../basic/armour/MailArmour'

export default class MagicMailArmour extends MagicItem {
  public readonly type: string = 'magicmailarmour'
  public readonly name: string = 'Magic Mail Armour'
  public readonly description: string = ''
  public readonly baseItem: Item = new MailArmour()
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
