import Spell, { Category, School } from '../Spell'

export default class EnchantArmour extends Spell {
  public readonly type: string = 'enchantarmour'
  constructor() {
    super({
      name: 'Enchant Armour',
      description:
        'The armour worn by the target now counts as magic armour and grants a +1 to Armour for the rest of the game. Multiple castings of this spell on the same target have no effect',
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
