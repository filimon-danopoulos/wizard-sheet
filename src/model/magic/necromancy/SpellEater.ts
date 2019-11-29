import Spell, { Category, School } from '../Spell'

export default class SpellEater extends Spell {
  public readonly type: string = 'spelleater'
  constructor() {
    super({
      name: 'Spell Eater',
      description:
        'This spell cancels the effects of any one spell currently in play, and the spellcaster immediately takes 1 point of damage. It cannot unsummon a creature, but it can cancel the control of a creature. ',
      school: School.Necromancy,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new SpellEater()
    spell.difficulty = this.difficulty
    return spell
  }
}
