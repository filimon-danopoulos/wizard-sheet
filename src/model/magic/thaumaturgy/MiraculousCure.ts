import Spell, { Category, School } from '../Spell'

export default class MiraculousCure extends Spell {
  public readonly type: string = 'miraculouscure'
  constructor() {
    super({
      name: 'Miraculous Cure',
      description:
        'This spell removes all of the effects of one type of Permanent Injury. For example, a wizard suffering from Lost Fingers regrows all his missing digits, regardless of how many times he has suffered that particular injury.',
      school: School.Thaumaturgy,
      category: Category.OutOfGame,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new MiraculousCure()
    spell.difficulty = this.difficulty
    return spell
  }
}
