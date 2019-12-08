import MagicItem from '@/model/items/magic/items/MagicItem'
import Character from '@/model/Character'

export default class BootsOfSpeed extends MagicItem {
  public readonly type: string = 'bootsofspeed'
  public readonly name: string = 'Boots of Speed'
  public readonly cost: number = 300
  public readonly description: string = '+1 move'

  public apply(character: Character) {
    character.move.modify(1)
  }

  public remove(character: Character) {
    character.move.modify(-1)
  }
}
