import Spell, { Category, School } from '../Spell'

export default class RevealInvisible extends Spell {
  public readonly type: string = 'revealinvisible'
  constructor() {
    super({
      name: 'Reveal Invisible',
      description: 'This spell cancels all Invisibility spells within 24” of the caster.',
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
