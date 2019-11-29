import Spell, { Category, School } from '../Spell'

export default class TimeWalk extends Spell {
  public readonly type: string = 'timewalk'
  constructor() {
    super({
      name: 'Time Walk',
      description:
        'The spellcaster is allowed to activate, with the usual two actions, for a second time in the turn – during the soldier phase. If a spellcaster fails to cast this spell, he suffers 2 damage in addition to any other damage for failing to cast the spell. A spellcaster cannot cast Time Walk if he is currently using Time Store.',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 18,
      effect: ''
    })
  }
  public copy() {
    const spell = new TimeWalk()
    spell.difficulty = this.difficulty
    return spell
  }
}
