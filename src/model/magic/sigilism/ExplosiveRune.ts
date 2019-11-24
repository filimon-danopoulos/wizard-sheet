import Spell, { Category, School } from '../Spell'

export default class ExplosiveRune extends Spell {
  constructor() {
    super({
      name: 'Explosive Rune',
      description: '',
      school: School.Sigilism,
      category: Category.Touch,
      difficulty: 10,
      effect: ''
    })
  }
}
