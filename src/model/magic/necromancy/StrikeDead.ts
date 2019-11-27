import Spell, { Category, School } from '../Spell'

export default class StrikeDead extends Spell {
  public readonly type: string = 'strikedead'
  constructor() {
    super({
      name: 'Strike Dead',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 18,
      effect: ''
    })
  }
  public copy() {
    const spell = new StrikeDead()
    spell.difficulty = this.difficulty
    return spell
  }
}
