import Spell, { Category, School } from '../Spell'

export default class CombatAwareness extends Spell {
  constructor() {
    super({
      name: 'Combat Awareness',
      description: '',
      school: School.Soothsaying,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
}
