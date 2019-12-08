import MagicItem from '@/model/items/magic/items/MagicItem'

export default class GlovesOfCasting extends MagicItem {
  public readonly type: string = 'glovesofcasting'
  public readonly name: string = 'Gloves of Casting'
  public readonly cost: number = 200
  public readonly description: string =
    'Once per game, a spellcaster can use the gloves to gain a +5 to one casting roll. However, the spellcaster must declare that he is using them before the casting roll is made.'
}
