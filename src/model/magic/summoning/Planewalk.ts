import Spell, { Category, School } from '../Spell'

export default class Planewalk extends Spell {
  public readonly type: string = 'planewalk'
  constructor() {
    super({
      name: 'Planewalk',
      description:
        'Although the spellcaster remains in the same physical location, he briefly moves between planes. Until his next activiation, he can ignore all terrain when moving, walking through walls and across chasms. He may not be the target of any shooting attacks or spells. The spellcaster will never be considered in combat during the turn, nor can he be attacked by any figure. However, he also may not pick up treasure, or in any way affect other characters or terrain on the board. If he is carrying treasure, he drops it. It is incredibly draining to move between planes of existence, so if a spellcaster attempts to cast this spell in a second consecutive turn, he suffers a -5 modifier. He suffers a -10 modifier if he attempts it three turns in a row and -15 on the fourth turn and beyond. ',
      school: School.Summoning,
      category: Category.SelfOnly,
      difficulty: 14,
      effect: ''
    })
  }
  public copy() {
    const spell = new Planewalk()
    spell.difficulty = this.difficulty
    return spell
  }
}
