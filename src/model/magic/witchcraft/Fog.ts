import Spell, { Category, School } from '../Spell'

export default class Fog extends Spell {
  public readonly type: string = 'fog'
  constructor() {
    super({
      name: 'Fog',
      description: '',
      school: School.Witchcraft,
      category: Category.LineOfSight,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Fog()
    spell.difficulty = this.difficulty
    return spell
  }
}
