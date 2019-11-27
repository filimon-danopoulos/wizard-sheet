import Spell, { Category, School } from '../Spell'

export default class RevealInvisible extends Spell {
  public readonly type: string = 'revealinvisible'
  constructor() {
    super({
      name: 'Reveal Invisible',
      description: '',
      school: School.Soothsaying,
      category: Category.AreaEffect,
      difficulty: 8,
      effect: ''
    })
  }
  public copy() {
    const spell = new RevealInvisible()
    spell.difficulty = this.difficulty
    return spell
  }
}
