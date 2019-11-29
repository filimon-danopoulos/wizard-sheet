import Spell, { Category, School } from '../Spell'

export default class TimeStone extends Spell {
  public readonly type: string = 'timestone'
  constructor() {
    super({
      name: 'Time Stone',
      description:
        'The spellcaster captures a fragment of his own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during the turn. He must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action’ that he may use in a future turn. This action can only be used while the spellcaster is taking his normal actions for the turn, essentially giving him three actions in that turn. A spellcaster may only ever have one stored action at any time. ',
      school: School.Chronomancy,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new TimeStone()
    spell.difficulty = this.difficulty
    return spell
  }
}
