import Spell, { Category, School } from '../Spell'

export default class PlagueOfInsects extends Spell {
  constructor() {
    super({
      name: 'Plague of Insects',
      description: '',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
