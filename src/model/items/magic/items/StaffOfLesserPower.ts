import MagicItem from '@/model/items/magic/items/MagicItem'
import Staff from '@/model/items/basic/weapons/Staff'
import Character from '@/model/Character'

export default class StaffOfLesserPower extends MagicItem {
  public readonly type: string = 'staffoflesserpower'
  public readonly name: string = 'Staff of Power (1)'
  public readonly cost: number = 200
  public readonly description: string =
    'Can be used in conjunction with the spellcaster’s Health to empower a spell for 1 point. Staffs of Power regenerate between games.'

  public apply(character: Character) {
    const staff = new Staff()
    staff.apply(character)
  }

  public remove(character: Character) {
    const staff = new Staff()
    staff.remove(character)
  }
}
