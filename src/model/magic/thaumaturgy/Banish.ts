import Spell, { Category, School } from '../Spell'

export default class Banish extends Spell {
  public readonly type: string = 'banish'
  constructor() {
    super({
      name: 'Banish',
      description: '',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Banish()
    spell.difficulty = this.difficulty
    return spell
  }
}
