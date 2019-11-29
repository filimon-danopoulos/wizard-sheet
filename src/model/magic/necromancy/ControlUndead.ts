import Spell, { Category, School } from '../Spell'

export default class ControlUndead extends Spell {
  public readonly type: string = 'controlundead'
  constructor() {
    super({
      name: 'Control Undead',
      description:
        'If successfully cast, the target undead creature must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the undead creature for the rest of the game. A spellcaster may only control one undead creature at a time. ',
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
