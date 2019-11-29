import Spell, { Category, School } from '../Spell'

export default class BindDemon extends Spell {
  public readonly type: string = 'binddemon'
  constructor() {
    super({
      name: 'Bind Demon',
      description:
        'The target demon must make an immediate Will roll versus the casting roll. If it fails, the spellcaster gains control of the demon for the rest of the game. A spellcaster may only have one bound demon at a time.',
      school: School.Summoning,
      category: Category.LineOfSight,
      difficulty: 10,
      effect: ''
    })
  }
  public copy() {
    const spell = new BindDemon()
    spell.difficulty = this.difficulty
    return spell
  }
}
