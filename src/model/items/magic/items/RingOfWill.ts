import MagicItem from '@/model/items/magic/items/MagicItem'
import Character from '@/model/Character'

export default class RingOfWill extends MagicItem {
  public readonly type: string = 'ringofwill'
  public readonly name: string = 'Ring of Will'
  public readonly cost: number = 300
  public readonly description: string = '+1 will'

  public apply(character: Character) {
    character.will.modify(1)
  }

  public remove(character: Character) {
    character.will.modify(-1)
  }
}
