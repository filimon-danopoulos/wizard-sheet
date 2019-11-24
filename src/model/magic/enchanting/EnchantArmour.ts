import Spell, { Category, School } from '../Spell'

export default class EnchantArmour extends Spell {
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
}
