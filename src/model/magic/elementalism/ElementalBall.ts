import Spell, { Category, School } from '../Spell'

export default class ElementalBall extends Spell {
  public readonly type: string = 'elementalball'
  constructor() {
    super({
      name: 'Elemental Ball',
      description:
        'The spellcaster chooses an enemy figure within 24” and line of sight and hurls a ball of destructive elemental energy at it. The target, and every figure (including friendly ones) within 1.5” and line of sight of the target, immediately suffers a +5 shooting attack (roll each attack separately). This spell may not target an enemy figure that is even partially obscured by another figure.',
      school: School.Elementalism,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ElementalBall()
    spell.difficulty = this.difficulty
    return spell
  }
}
