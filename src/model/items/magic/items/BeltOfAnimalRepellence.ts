import MagicItem from '@/model/items/magic/items/MagicItem'

export default class BeltOfAnimalRepellence extends MagicItem {
  public readonly type: string = 'beltofanimalrepellence'
  public readonly name: string = 'Belt of Animal Repellence'
  public readonly cost: number = 200
  public readonly description: string =
    'All animals must make a Will roll against a target of 14 to come within 3” of the wearer. This applies to animals in the wearer’s own warband.'
}
