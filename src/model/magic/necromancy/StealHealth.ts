import Spell, { Category, School } from '../Spell'

export default class StealHealth extends Spell {
  public readonly type: string = 'stealhealth'
  constructor() {
    super({
      name: 'Steal Health',
      description:
        'The target must make an immediate Will roll versus the casting roll. If failed, the target immediately loses 3 Health and the spellcaster regains 3 Health. This may not take the spellcaster above his starting health. This spell has no effect on undead, constructs or demons. A spellcaster may target a member of his own warband – if he does, however, the target will immediately (and permanently) leave the warband and will move as quickly as possible off the board.',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new StealHealth()
    spell.difficulty = this.difficulty
    return spell
  }
}
