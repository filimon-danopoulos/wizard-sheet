import Spell, { Category, School } from '../Spell'

export default class SpellEater extends Spell {
  public readonly type: string = 'spelleater'
  constructor() {
    super({
      name: 'Spell Eater',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new SpellEater()
    spell.difficulty = this.difficulty
    return spell
  }
}
