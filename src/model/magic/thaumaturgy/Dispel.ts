import Spell, { Category, School } from '../Spell'

export default class Dispel extends Spell {
  public readonly type: string = 'dispel'
  constructor() {
    super({
      name: 'Dispel',
      description:
        'Immediately cancels the ongoing effect of any one spell. It cannot unsummon a creature, but it can cancel the control of a creature.',
      school: School.Thaumaturgy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new Dispel()
    spell.difficulty = this.difficulty
    return spell
  }
}
