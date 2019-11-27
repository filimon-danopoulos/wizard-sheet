import Spell, { Category, School } from '../Spell'

export default class MiraculousCure extends Spell {
  public readonly type: string = 'miraculouscure'
  constructor() {
    super({
      name: 'Miraculous Cure',
      description: '',
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
