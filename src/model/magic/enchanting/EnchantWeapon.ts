import Spell, { Category, School } from '../Spell'

export default class EnchantWeapon extends Spell {
  public readonly type: string = 'enchantweapon'
  constructor() {
    super({
      name: 'Enchant Weapon',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new EnchantWeapon()
    spell.difficulty = this.difficulty
    return spell
  }
}
