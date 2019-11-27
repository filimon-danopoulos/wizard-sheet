import Spell, { Category, School } from '../Spell'

export default class Crumble extends Spell {
  public readonly type: string = 'crumble'
  constructor() {
    super({
      name: 'Crumble',
      description: '',
      school: School.Chronomancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Crumble()
    spell.difficulty = this.difficulty
    return spell
  }
}
