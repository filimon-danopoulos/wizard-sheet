import Spell, { Category, School } from '../Spell'

export default class PlanarTear extends Spell {
  public readonly type: string = 'planartear'
  constructor() {
    super({
      name: 'Planar Tear',
      description:
        'The spellcaster creates a small tear in the fabric of the universe. This rift is painful to humans and creatures, but lethal to demons. The spellcaster selects a target point. All figures within 2” of that point must make a Will roll versus the casting roll or suffer 2 points of damage. Demons that fail the Will roll take damage equal to the casting roll.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new PlanarTear()
    spell.difficulty = this.difficulty
    return spell
  }
}
