import Spell, { Category, School } from '../Spell'

export default class ForgetSpell extends Spell {
  public readonly type: string = 'forgetspell'
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
  public copy() {
    const spell = new ForgetSpell()
    spell.difficulty = this.difficulty
    return spell
  }
}
