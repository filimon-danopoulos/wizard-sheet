import Spell, { Category, School } from '../Spell'

export default class StealHealth extends Spell {
  public readonly type: string = 'stealhealth'
  constructor() {
    super({
      name: 'Steal Health',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new StealHealth()
    spell.difficulty = this.difficulty
    return spell
  }
}
