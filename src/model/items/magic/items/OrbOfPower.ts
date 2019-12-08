import MagicItem from '@/model/items/magic/items/MagicItem'

export default class OrbOfPower extends MagicItem {
  public readonly type: string = 'orbofpower'
  public readonly name: string = 'Orb of Power (8)'
  public readonly cost: number = 350
  public readonly description: string =
    'Can be used in conjunction with the spellcaster’s Health to empower a spell for up to 8 points. Orbs of Power do not regenerate.'
}
