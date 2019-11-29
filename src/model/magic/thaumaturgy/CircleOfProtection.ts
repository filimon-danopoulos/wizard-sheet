import Spell, { Category, School } from '../Spell'

export default class CircleOfProtection extends Spell {
  public readonly type: string = 'circleofprotection'
  constructor() {
    super({
      name: 'Circle of Protection',
      description:
        'Creates a circle with a 3” diameter that no demon can enter or pass through. This spell has no effect on a possessed individual. A spellcaster may only have one active circle of protection at a time, but he does not have to remain within it.',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new CircleOfProtection()
    spell.difficulty = this.difficulty
    return spell
  }
}
