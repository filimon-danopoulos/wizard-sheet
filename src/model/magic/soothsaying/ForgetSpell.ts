import Spell, { Category, School } from '../Spell'

export default class ForgetSpell extends Spell {
  public readonly type: string = 'forgetspell'
  constructor() {
    super({
      name: 'Forget Spell',
      description:
        'The spellcaster picks one spell known by the target and causes him to temporarily forget how to cast it. The target may make a Will roll to attempt resist the effects of this spell – if unsuccessful, the he may not cast that spell for the remainder of the game.',
      school: School.Soothsaying,
      category: Category.LineOfSight,
      difficulty: 12,
      effect: ''
    })
  }
  public copy() {
    const spell = new ForgetSpell()
    spell.difficulty = this.difficulty
    return spell
  }
}
