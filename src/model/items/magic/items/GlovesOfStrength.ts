import MagicItem from '@/model/items/magic/items/MagicItem'
import Character from '@/model/Character'

export default class GlovesOfStrength extends MagicItem {
  public readonly type: string = 'glovesofstrength'
  public readonly name: string = 'Gloves of Strength'
  public readonly cost: number = 300
  public readonly description: string = '+2 damage'

  public apply(character: Character) {
    character.damage.modify(2)
  }

  public remove(character: Character) {
    character.damage.modify(-2)
  }
}
