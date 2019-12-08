import MagicItem from '@/model/items/magic/items/MagicItem'
import Item from '@/model/items/Item'
import Staff from '@/model/items/basic/weapons/Staff'
import Character from '@/model/Character'

export default class StaffOfGreaterPower extends MagicItem {
  public readonly type: string = 'staffofgreaterpower'
  public readonly name: string = 'Staff of Power (3)'
  public readonly baseItem: Item = new Staff()
  public readonly cost: number = 500
  public readonly description: string =
    'Can be used in conjunction with the spellcaster’s Health to empower a spell for 3 point. Staffs of Power regenerate between games.'

  public apply(character: Character) {
    const staff = new Staff()
    staff.apply(character)
  }

  public remove(character: Character) {
    const staff = new Staff()
    staff.remove(character)
  }
}
