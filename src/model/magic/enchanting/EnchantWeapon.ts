import Spell, { Category, School } from '../Spell'

export default class EnchantWeapon extends Spell {
  constructor() {
    super({
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
