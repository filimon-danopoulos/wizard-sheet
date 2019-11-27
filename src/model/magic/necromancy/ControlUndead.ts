import Spell, { Category, School } from '../Spell'

export default class ControlUndead extends Spell {
  public readonly type: string = 'controlundead'
  constructor() {
    super({
      name: 'Control Undead',
      description: '',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ControlUndead()
    spell.difficulty = this.difficulty
    return spell
  }
}
