import Spell, { Category, School } from '../Spell'

export default class AbsorbKnowledge extends Spell {
  public readonly type: string = 'absorbknowledge'
  constructor() {
    super({
      name: 'Absorb Knowledge',
      description: '',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AbsorbKnowledge()
    spell.difficulty = this.difficulty
    return spell
  }
}
