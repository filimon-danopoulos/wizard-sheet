import Spell, { Category, School } from '../Spell'

export default class CallStorm extends Spell {
  public readonly type: string = 'callstorm'
  constructor() {
    super({
      name: 'Call Storm',
      description:
        'If this spell is successfully cast, all bow and crossbow attacks are -1 for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum penalty of -10.',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CallStorm()
    spell.difficulty = this.difficulty
    return spell
  }
}
