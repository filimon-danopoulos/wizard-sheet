import Spell, { Category, School } from '../Spell'

export default class WillPower extends Spell {
  public readonly type: string = 'willpower'
  constructor() {
    super({
      name: 'Will Power',
      description:
        'Target gains +3 Will for the rest of the game. Multiple Will Power spells on the same target have no effect.',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new WillPower()
    spell.difficulty = this.difficulty
    return spell
  }
}
