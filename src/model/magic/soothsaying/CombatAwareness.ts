import Spell, { Category, School } from '../Spell'

export default class CombatAwareness extends Spell {
  public readonly type: string = 'combatawareness'
  constructor() {
    super({
      name: 'Combat Awareness',
      description:
        'This spell gives the target a magic insight into the moves his opponent will attempt in a fight. It gives the target a +2 Fight stat for the remainder of the game. Multiple castings of this spell on the same target have no effect.',
      school: School.Soothsaying,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CombatAwareness()
    spell.difficulty = this.difficulty
    return spell
  }
}
