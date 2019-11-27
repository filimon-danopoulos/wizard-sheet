import Spell, { Category, School } from '../Spell'

export default class RevealDeath extends Spell {
  public readonly type: string = 'revealdeath'
  constructor() {
    super({
      name: 'Reveal Death',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new RevealDeath()
    spell.difficulty = this.difficulty
    return spell
  }
}
