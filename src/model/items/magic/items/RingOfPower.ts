import MagicItem from '@/model/items/magic/items/MagicItem'

export default class RingOfPower extends MagicItem {
  public readonly type: string = 'ringofpower'
  public readonly name: string = 'Ring of Power (1)'
  public readonly cost: number = 200
  public readonly description: string =
    'Can be used in conjunction with the spellcaster’s Health to empower a spell for 1 point. Rings of Power regenerate between games.'
}
