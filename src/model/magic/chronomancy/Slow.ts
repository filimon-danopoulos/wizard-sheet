import Spell, { Category, School } from '../Spell'

export default class Slow extends Spell {
  public readonly type: string = 'slow'
  constructor() {
    super({
      name: 'Slow',
      description:
        'The target must pass a Will roll or be reduced to one action per activation. After each activation, the target may attempt another Will roll versus the original casting roll, in order to shake off the effects of the spell. Otherwise, its effects last until the end of the game. Multiple castings of this spell on the same target have no effect. ',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Slow()
    spell.difficulty = this.difficulty
    return spell
  }
}
