import MagicItem from '@/model/items/magic/items/MagicItem'
import Staff from '@/model/items/basic/weapons/Staff'
import Character from '@/model/Character'

export default class StaffOfCasting extends MagicItem {
  public readonly type: string = 'staffofcasting'
  public readonly name: string = 'Staff of Casting'
  public readonly cost: number = 600
  public readonly description: string =
    'When this item is found, roll on the random spell table to identify a spell. This staff gives a +2 to the casting roll for that specific spell. Note that, if purchasing a Staff of Casting, you must pay its cost before rolling to identify the spell. A Staff of Casting counts as a regular staff for combat purposes.'

  public apply(character: Character) {
    const staff = new Staff()
    staff.apply(character)
  }

  public remove(character: Character) {
    const staff = new Staff()
    staff.remove(character)
  }
}
