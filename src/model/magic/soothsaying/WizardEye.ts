import Spell, { Category, School } from '../Spell'

export default class WizardEye extends Spell {
  public readonly type: string = 'wizardeye'
  constructor() {
    super({
      name: 'Wizard Eye',
      description: '',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new WizardEye()
    spell.difficulty = this.difficulty
    return spell
  }
}
