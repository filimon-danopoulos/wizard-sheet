import Spell, { Category, School } from '../Spell'

export default class WizardEye extends Spell {
  constructor() {
    super({
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
}
