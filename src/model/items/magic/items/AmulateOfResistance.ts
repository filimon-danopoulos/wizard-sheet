import MagicItem from '@/model/items/magic/items/MagicItem'

export default class AmulateOfResistance extends MagicItem {
  public readonly type: string = 'amulateofresistance'
  public readonly name: string = 'Amulate of Resistance'
  public readonly cost: number = 300
  public readonly description: string =
    'Once per game, the wearer may add +4 to a Will roll to resist a spell. The decision to use the amulet can be made after the Will roll has taken place.'
}
