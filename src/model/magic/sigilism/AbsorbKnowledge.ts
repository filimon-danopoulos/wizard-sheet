import Spell, { Category, School } from '../Spell'

export default class AbsorbKnowledge extends Spell {
  public readonly type: string = 'absorbknowledge'
  constructor() {
    super({
      name: 'Absorb Knowledge',
      description:
        'This spell can only be cast by a wizard, and allows him to absorb the knowledge from a written work without having to read it. A wizard immediately gains 50 experience points for casting this spell to represent the speed with which he can gain knowledge. This spell may only be cast after a game in which the wizard was not reduced to 0 Health.',
      school: School.Sigilism,
      category: Category.OutOfGame,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new AbsorbKnowledge()
    spell.difficulty = this.difficulty
    return spell
  }
}
