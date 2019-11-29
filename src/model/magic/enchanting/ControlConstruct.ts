import Spell, { Category, School } from '../Spell'

export default class ControlConstruct extends Spell {
  public readonly type: string = 'controlconstruct'
  constructor() {
    super({
      name: 'Control Construct',
      description:
        'If successfully cast, the target construct must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the construct for the rest of the game. A spellcaster may only control one construct at a time. ',
      school: School.Enchanting,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ControlConstruct()
    spell.difficulty = this.difficulty
    return spell
  }
}
