import Spell, { Category, School } from '../Spell'

export default class MindControl extends Spell {
  public readonly type: string = 'mindcontrol'
  constructor() {
    super({
      name: 'Mind Control',
      description:
        'This spell only affects soldiers and creatures. If the target fails a Will roll against the casting roll, he temporarily joins the spellcaster’s warband and can be activated as normal during the soldier phase of the spellcaster’s turn. After each activation, the soldier may make a Will roll versus the casting roll to shake off the spell’s effects. A spellcaster may only have one active Mind Control spell at a time.',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new MindControl()
    spell.difficulty = this.difficulty
    return spell
  }
}
