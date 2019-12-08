import MagicItem from '@/model/items/magic/items/MagicItem'

export default class FateStone extends MagicItem {
  public readonly type: string = 'fatestone'
  public readonly name: string = 'Fate Stone'
  public readonly cost: number = 300
  public readonly description: string =
    'Once per game, the bearer of the Fate Stone may re-roll any one die. He may then choose which of the two rolls to use.'
}
