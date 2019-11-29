import Spell, { Category, School } from '../Spell'

export default class Heal extends Spell {
  public readonly type: string = 'heal'
  constructor() {
    super({
      name: 'Heal',
      description:
        'This spell restores 5 points of Health to the target model. This spell cannot take a model above its starting health.',
      school: School.Thaumaturgy,
      category: Category.Touch,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new Heal()
    spell.difficulty = this.difficulty
    return spell
  }
}
