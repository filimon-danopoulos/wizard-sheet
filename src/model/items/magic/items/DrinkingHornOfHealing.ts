import MagicItem from '@/model/items/magic/items/MagicItem'

export default class DrinkingHornOfHealing extends MagicItem {
  public readonly type: string = 'drinkinghornofhealing'
  public readonly name: string = 'Drinking Horn Of Healing'
  public readonly cost: number = 250
  public readonly description: string =
    'The bearer regains 2 Health for every action spent drinking from the horn. This power can be used any number of times.'
}
