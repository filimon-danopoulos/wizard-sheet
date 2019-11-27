import Spell, { Category, School } from '../Spell'

export default class EnchantArmour extends Spell {
  public readonly type: string = 'enchantarmour'
  constructor() {
    super({
      name: 'Enchant Armour',
      description: '',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new EnchantArmour()
    spell.difficulty = this.difficulty
    return spell
  }
}
