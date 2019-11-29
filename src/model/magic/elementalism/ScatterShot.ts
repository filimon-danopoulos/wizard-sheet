import Spell, { Category, School } from '../Spell'

export default class ScatterShot extends Spell {
  public readonly type: string = 'scattershot'
  constructor() {
    super({
      name: 'Scatter Shot',
      description:
        'The spellcaster may make one +0 attack against every enemy figure (either from an opposing warband or a creature) within 12”. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case. ',
      school: School.Elementalism,
      category: Category.AreaEffect,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ScatterShot()
    spell.difficulty = this.difficulty
    return spell
  }
}
