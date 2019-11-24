import Spell, { Category, School } from '../Spell'

export default class EnchantWeapon extends Spell {
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
}
