import Spell, { Category, School } from '../Spell'

export default class StrikeDead extends Spell {
  public readonly type: string = 'strikedead'
  constructor() {
    super({
      name: 'Strike Dead',
      description:
        'This spell may target a figure within 8”. The target must make a Will roll versus the casting roll or be immediately reduced to 0 Health. All figures may empower their Will roll to resist this spell, even non-spellcasters. The spellcaster immediately loses 1 Health upon attempting this spell (even if it is cast successfully), plus any additional loss incurred by failure or empowerment.',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 18,
      effect: ''
    })
  }
  public copy() {
    const spell = new StrikeDead()
    spell.difficulty = this.difficulty
    return spell
  }
}
