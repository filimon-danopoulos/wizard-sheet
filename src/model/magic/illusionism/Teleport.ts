import Spell, { Category, School } from '../Spell'

export default class Teleport extends Spell {
  public readonly type: string = 'teleport'
  constructor() {
    super({
      name: 'Teleport',
      description:
        'The spellcaster immediately moves to any location within line of sight, but may take no other action this turn. This spell may not be used to enter combat.',
      school: School.Illusionism,
      category: Category.SelfOnly,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new Teleport()
    spell.difficulty = this.difficulty
    return spell
  }
}
