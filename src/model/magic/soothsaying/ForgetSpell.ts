import Spell, { Category, School } from '../Spell'

export default class ForgetSpell extends Spell {
  constructor() {
    super({
      name: 'Forget Spell',
      description: '',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
}
