import MagicItem from '@/model/items/magic/items/MagicItem'
import Staff from '@/model/items/basic/weapons/Staff'
import Character from '@/model/Character'

export default class StaffOfPower extends MagicItem {
  public readonly type: string = 'staffofpower'
  public readonly name: string = 'Staff of Power (2)'
  public readonly cost: number = 350
  public readonly description: string =
    'Can be used in conjunction with the spellcaster’s Health to empower a spell for 2 point. Staffs of Power regenerate between games.'

  public apply(character: Character) {
    const staff = new Staff()
    staff.apply(character)
  }

  public remove(character: Character) {
    const staff = new Staff()
    staff.remove(character)
  }
}
